import { QueryResolvers } from "graph/resolvers/types.generated";

const User: QueryResolvers["user"] = async (parent, { id }, { prisma }) => {
  return await prisma.user.findOne({
    where: {
      id: parseInt(id),
    },
  });
};

export default User;
