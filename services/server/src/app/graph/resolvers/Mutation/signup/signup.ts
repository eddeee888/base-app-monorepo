import { ResolverContextLoggedIn, ResolverContextNotLoggedIn } from "graph/types";
import { AuthenticationError, UserInputError } from "apollo-server";
import validateSignupInput from "./validateSignupInput";
import { canUserBeCreated } from "graph/permissions";
import { MutationResolvers, SignupInput } from "graph/resolvers/types.generated";
import createNewUser from "actions/createNewUser";

const validateInput = async ({ prisma }: ResolverContextNotLoggedIn, input: SignupInput): Promise<void> => {
  const inputErrors = await validateSignupInput(input);
  if (inputErrors) {
    throw new UserInputError("Invalid input", inputErrors);
  }

  const canBeCreated = await canUserBeCreated({ prisma, email: input.email });
  if (!canBeCreated) {
    throw new UserInputError("Invalid input", {
      email: ["Email already exists"],
    });
  }
};

const signup: MutationResolvers["signup"] = async (parent, args, ctx) => {
  await validateInput(ctx, args.input);

  const newUser = await createNewUser(
    { prisma: ctx.prisma, password: ctx.libs.password },
    { email: args.input.email, password: args.input.password, firstName: args.input.firstName, lastName: args.input.lastName }
  );

  try {
    const token = ctx.libs.jwt.sign({
      id: newUser.id.toString(),
    });
    ctx.libs.headers.setTokenToResponse(ctx.res, token);
  } catch (e) {
    throw new AuthenticationError("Unable to sign token");
  }

  // Must attach user here as viewer because at this point forward.
  // The user is logged in. This allows us to query private user details such as email
  ((ctx as unknown) as ResolverContextLoggedIn).viewer = newUser;

  return { ...newUser };
};

export default signup;
