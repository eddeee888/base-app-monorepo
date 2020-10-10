import { UserResolvers } from "@libs/graph/resolvers.generated";
import { convertDisplayName } from "@libs/models/user";

export const User: UserResolvers = {
  avatar: async ({ id }, arg, { prisma }) => {
    const avatar = await prisma.user.findOne({ where: { id } }).avatar();
    return avatar?.src ?? null;
  },
  displayName: async ({ firstName, lastName }) => {
    return convertDisplayName({ firstName, lastName });
  },
};
