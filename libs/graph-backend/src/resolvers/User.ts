import type { UserResolvers } from '../generated/resolvers.generated';

export const User: UserResolvers = {
  displayName: async ({ name }) => {
    if (name) {
      return name;
    }

    return 'friend';
  },
};
