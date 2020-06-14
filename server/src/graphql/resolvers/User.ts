import { UserResolvers } from "graphql/resolvers/types.generated";

export const User: UserResolvers = {
  avatar: async ({ id }, arg, { prisma }) => {
    const avatar = await prisma.user.findOne({ where: { id } }).avatar();
    return avatar?.src ?? null;
  },
  displayName: async ({ firstName, lastName }) => {
    return `${firstName} ${lastName.charAt(0)}.`;
  },
};
