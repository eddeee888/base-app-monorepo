import { setTokenToResponse } from 'src/helpers/headers';
import { sign } from 'src/helpers/utils/jwt';
import { compare } from 'src/helpers/utils/password';
import { throwAuthenticationError } from 'src/web/graphql/errors';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import { LoginPayload } from 'src/web/graphql/types';

const login: MutationResolvers.LoginResolver = async (parent, args, ctx) => {
  const { email, password } = args.input;

  const user = await ctx.prisma.user({
    email
  });

  if (!user) {
    return null;
  }

  const correctPassword = await compare(password, user.password);

  if (!correctPassword) {
    return null;
  }

  try {
    const token = sign({
      id: user.id
    });
    setTokenToResponse(ctx.response, token);
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
