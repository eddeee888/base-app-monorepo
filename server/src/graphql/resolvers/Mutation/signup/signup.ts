import { updateGroup } from "models/user";
import { ResolverContextLoggedIn, ResolverContextNotLoggedIn } from "graphql/types";
import { AuthenticationError, UserInputError } from "apollo-server";
import validateSignupInput from "graphql/resolvers/Mutation/signup/validateSignupInput";
import { canUserBeCreated } from "graphql/permissions";
import { MutationResolvers, SignupInput } from "graphql/resolvers/types.generated";

const validateInput = async ({ prisma }: ResolverContextNotLoggedIn, input: SignupInput): Promise<void> => {
  const inputErrors = await validateSignupInput(input);
  if (inputErrors) {
    throw new UserInputError("Invalid input", inputErrors);
  }

  const canBeCreated = await canUserBeCreated(prisma, input.email);
  if (!canBeCreated) {
    throw new UserInputError("Invalid input", {
      email: ["Email already exists"],
    });
  }
};

const signup: MutationResolvers["signup"] = async (parent, args, ctx) => {
  await validateInput(ctx, args.input);

  const hashedPassword = await ctx.utils.password.hash(args.input.password);
  const newUser = await ctx.prisma.createUser({
    email: args.input.email,
    firstName: args.input.firstName,
    lastName: args.input.lastName,
    password: hashedPassword,
    userGroup: JSON.stringify(
      updateGroup({
        user: true,
      })
    ),
  });

  try {
    const token = ctx.utils.jwt.sign({
      id: newUser.id,
    });
    ctx.utils.headers.setTokenToResponse(ctx.res, token);
  } catch (e) {
    throw new AuthenticationError("Unable to sign token");
  }

  // Must attach user here as viewer because at this point forward.
  // The user is logged in. This allows us to query private user details such as email
  ((ctx as unknown) as ResolverContextLoggedIn).viewer = newUser;

  return { ...newUser };
};

export default signup;
