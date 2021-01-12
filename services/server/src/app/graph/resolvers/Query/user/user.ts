import { QueryResolvers } from "@libs/graph/resolvers.generated";
import { mustParseInt } from "@libs/utils";

const User: QueryResolvers["user"] = async (parent, { id }, { prisma }) => {
  return await prisma.user.findUnique({ where: { id: mustParseInt(id) } });
};

export default User;
