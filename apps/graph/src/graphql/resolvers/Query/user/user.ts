import type { QueryResolvers } from "../../../generated/resolvers.generated";

export const user: QueryResolvers["user"] = async (_parent, { id }, { prisma }) => {
  const idInt = parseInt(id);

  if (isNaN(idInt)) {
    return null;
  }

  const result = await prisma.user.findFirst({
    where: { id: idInt },
  });

  return result;
};
