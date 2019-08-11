import { updateGroup, UserGroup } from 'models/user';
import { ResolverContext } from 'graphql/types';
import {
  throwAuthenticationError,
  throwDatabaseError,
  throwInputValidationError
} from 'graphql/errors';
import { MutationResolvers } from 'graphql/generated/graphqlgen';
import { User as PrismaUser } from 'prisma/generated/client';
import validateSignupInput from 'graphql/resolvers/mutations/signup/validateSignupInput';
import { canUserBeCreated } from 'graphql/permissions';

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
  { prisma }: ResolverContext,
  input: MutationResolvers.SignupInput
): Promise<void> => {
  const inputErrors = await validateSignupInput(input);
  if (inputErrors) {
    throwInputValidationError(inputErrors);
  }

  let canBeCreated = false;
  try {
    canBeCreated = await canUserBeCreated(prisma, input.email);
  } catch (e) {
    throwDatabaseError('Unable to check user email');
  }

  if (!canBeCreated) {
    throwInputValidationError({ email: ['Email already exists'] });
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
