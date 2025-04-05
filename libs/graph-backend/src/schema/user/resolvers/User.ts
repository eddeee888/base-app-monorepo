import type { UserResolvers } from './../../types.generated';
export const User: UserResolvers = {
  displayName: ({ name }) => {
    return name || 'friend';
  },
};
