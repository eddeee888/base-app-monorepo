import { UserResolvers } from 'graphql/resolvers/types.generated';
import { AuthenticationError, ForbiddenError } from 'apollo-server';
import { hasGroup } from 'models/user';

export const User: UserResolvers = {
  email: ({ id, email }, arg, { viewer }) => {
    if (!viewer) {
      throw new AuthenticationError('Must be logged in');
    }

    if (!hasGroup(viewer, 'admin') && viewer.id !== id) {
      throw new ForbiddenError('No permission');
    }

    return email;
  },
  avatar: async ({ id }, arg, { prisma }) => {
    return await prisma
      .user({ id })
      .avatar()
      .src();
  }
};
