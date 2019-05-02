import { throwAuthenticationError } from 'src/web/graphql/errors';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';

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

  return {
    user: { ...user }
  };
};

export default login;
