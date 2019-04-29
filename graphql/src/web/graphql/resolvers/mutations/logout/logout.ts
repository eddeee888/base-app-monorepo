import { throwAuthenticationError } from 'src/web/graphql/errors';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';

const logout: MutationResolvers.LogoutResolver = async (parent, args, ctx) => {
  try {
    ctx.utils.headers.setTokenToResponse(ctx.response, '');
    return true;
  } catch (e) {
    return throwAuthenticationError('Unable to remove token');
  }
};

export default logout;
