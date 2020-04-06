import { QueryResolvers } from "graphql/resolvers/types.generated";

const User: QueryResolvers["user"] = async (parent, { id }, { prisma }) => {
  return await prisma.user({ id });
};

export default User;
