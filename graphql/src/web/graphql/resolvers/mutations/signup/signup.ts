import { updateGroup, UserGroup } from 'src/models/user';
import { getUserByEmail } from 'src/repositories/user';
import { ResolverContext } from 'src/types';
import {
  throwAuthenticationError,
  throwDatabaseError,
  throwFormValidationError
} from 'src/web/graphql/errors';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import { User as PrismaUser } from 'src/web/graphql/generated/prisma-client';
import validateSignupInput from 'src/web/graphql/resolvers/mutations/signup/validateSignupInput';

type ValidateInputFn = (input: MutationResolvers.SignupInput) => void;

type CreateUserFn = (
  ctx: ResolverContext,
  input: MutationResolvers.SignupInput
) => Promise<{ result?: PrismaUser; error?: Error }>;

const signup: MutationResolvers.SignupResolver = async (parent, args, ctx) => {
  await validateInput(args.input);

  const { result: newUser, error } = await createUser(ctx, args.input);
  if (error || !newUser) {
    return throwDatabaseError('Unable to create new user');
  }

  try {
    const token = ctx.utils.jwt.sign({
      id: newUser.id
    });
    ctx.utils.headers.setTokenToResponse(ctx.response, token);
  } catch (e) {
    return throwAuthenticationError('Unable to sign token');
  }

  return {
    user: {
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      displayName: newUser.displayName
    }
  };
};

const validateInput: ValidateInputFn = async input => {
  const inputErrors = await validateSignupInput(input);
  if (inputErrors) {
    throwFormValidationError(inputErrors);
  }

  let existingUser;
  try {
    existingUser = await getUserByEmail(input.email);
  } catch (e) {
    throwDatabaseError('Unable to check user email');
  }

  if (existingUser) {
    throwFormValidationError({ email: ['Email already exists'] });
  }
};

const createUser: CreateUserFn = async (
  ctx,
  { password, email, firstName, lastName }
) => {
  try {
    const hashedPassword = await ctx.utils.password.hash(password);
    const result = await ctx.prisma.createUser({
      email,
      firstName,
      lastName,
      password: hashedPassword,
      userGroup: JSON.stringify(
        updateGroup({
          [UserGroup.user]: true
        })
      )
    });
    return { result };
  } catch (error) {
    return { error };
  }
};

export default signup;
