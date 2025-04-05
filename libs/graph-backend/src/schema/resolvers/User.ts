import type { UserResolvers } from './../types.generated';
export const User: UserResolvers = {
  /* Implement User resolver logic here */
  displayName: async (_parent, _arg, _ctx) => {
    /* User.displayName resolver is required because User.displayName exists but UserMapper.displayName does not */
  },
};
