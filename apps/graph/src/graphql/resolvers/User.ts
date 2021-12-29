import type { UserResolvers } from "../generated/resolvers.generated";

export const User: UserResolvers = {
  displayName: async ({ firstName, lastName }) => {
    if (firstName && !lastName) {
      return firstName;
    }

    if (firstName && lastName) {
      return `${firstName} ${lastName.charAt(0)}`;
    }

    return "friend";
  },
};
