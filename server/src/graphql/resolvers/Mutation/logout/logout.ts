import { AuthenticationError } from 'apollo-server';
import { MutationResolvers } from 'graphql/resolvers/types.generated';

const logout: MutationResolvers['logout'] = async (parent, args, ctx) => {
  try {
    ctx.utils.headers.setTokenToResponse(ctx.res, '');
    return true;
  } catch (e) {
    throw new AuthenticationError('Unable to remove token');
  }
};

export default logout;
