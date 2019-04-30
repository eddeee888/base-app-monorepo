import { throwAuthenticationError } from 'src/web/graphql/errors';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import { LoginPayload } from 'src/web/graphql/models';

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

  const result: LoginPayload = {
    user: {
      id: user.id,
      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email,
      displayName: user.displayName
    }
  };

  return result;
};

export default login;
