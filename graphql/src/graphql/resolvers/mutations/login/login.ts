import { throwAuthenticationError } from 'graphql/errors';
import { MutationResolvers } from 'graphql/generated/graphqlgen';

const login: MutationResolvers.LoginResolver = async (parent, args, ctx) => {
  const { email, password } = args.input;

  const user = await ctx.prisma.user({
    email
  });

  if (!user) {
    return null;
  }

  const correctPassword = await ctx.utils.password.compare(
    password,
    user.password
  );

  if (!correctPassword) {
    return null;
  }

  try {
    const token = ctx.utils.jwt.sign({
      id: user.id
    });
    ctx.utils.headers.setTokenToResponse(ctx.response, token);
  } catch (e) {
    return throwAuthenticationError('Unable to sign token');
  }

  // Must attach user here as viewer because at this point forward.
  // The user is logged in. This allows us to query private user details such as email
  ctx.viewer = user;

  return { ...user };
};

export default login;
