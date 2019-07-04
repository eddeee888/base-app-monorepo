import { updateGroup, UserGroup } from 'src/models/user';
import { ResolverContext } from 'src/types';
import {
  throwAuthenticationError,
  throwDatabaseError,
  throwFormValidationError
} from 'src/web/graphql/errors';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import { User as PrismaUser } from 'src/web/graphql/generated/prisma-client';
import validateSignupInput from 'src/web/graphql/resolvers/mutations/signup/validateSignupInput';

const createUser = async (
  ctx: ResolverContext,
  { password, email, firstName, lastName }: MutationResolvers.SignupInput
): Promise<{ result?: PrismaUser; error?: Error }> => {
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

const validateInput = async (
  ctx: ResolverContext,
  input: MutationResolvers.SignupInput
): Promise<void> => {
  const inputErrors = await validateSignupInput(input);
  if (inputErrors) {
    throwFormValidationError(inputErrors);
  }

  let existingUser;
  try {
    existingUser = await ctx.prisma.user({ email: input.email });
  } catch (e) {
    throwDatabaseError('Unable to check user email');
  }

  if (existingUser) {
    throwFormValidationError({ email: ['Email already exists'] });
  }
};

const signup: MutationResolvers.SignupResolver = async (parent, args, ctx) => {
  await validateInput(ctx, args.input);

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

  // Must attach user here as viewer because at this point forward.
  // The user is logged in. This allows us to query private user details such as email
  ctx.viewer = newUser;

  return { ...newUser };
};

export default signup;
