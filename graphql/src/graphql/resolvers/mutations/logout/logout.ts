import { throwAuthenticationError } from 'graphql/errors';
import { MutationResolvers } from 'graphql/generated/graphqlgen';

const logout: MutationResolvers.LogoutResolver = async (parent, args, ctx) => {
  try {
    ctx.utils.headers.setTokenToResponse(ctx.response, '');
    return true;
  } catch (e) {
    return throwAuthenticationError('Unable to remove token');
  }
};

export default logout;
