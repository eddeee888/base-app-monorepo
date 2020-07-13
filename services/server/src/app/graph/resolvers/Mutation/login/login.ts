import { AuthenticationError } from "apollo-server";
import { MutationResolvers } from "graph/resolvers/types.generated";
import { ResolverContextLoggedIn } from "graph/types";

const login: MutationResolvers["login"] = async (parent, args, ctx) => {
  const { email, password } = args.input;

  const user = await ctx.prisma.user.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return null;
  }

  const correctPassword = await ctx.utils.password.compare(password, user.password);

  if (!correctPassword) {
    return null;
  }

  try {
    const token = ctx.utils.jwt.sign({
      id: user.id.toString(),
    });
    ctx.utils.headers.setTokenToResponse(ctx.res, token);
  } catch (e) {
    throw new AuthenticationError("Unable to sign token");
  }

  // Must attach user here as viewer because at this point forward.
  // The user is logged in. This allows us to query private user details such as email
  ((ctx as unknown) as ResolverContextLoggedIn).viewer = user;

  return { ...user };
};

export default login;
