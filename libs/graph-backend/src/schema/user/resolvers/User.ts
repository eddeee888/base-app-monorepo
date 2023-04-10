import type { UserResolvers } from './../../types.generated';
export const User: UserResolvers = {
  id: ({ id }) => {
    return `${id}`;
  },
  displayName: ({ name }) => {
    if (name) {
      return name;
    }

    return 'friend';
  },
};
