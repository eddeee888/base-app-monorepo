import hasGroup from "@libs/models/user/hasGroup";
import { PrismaClient } from "@prisma/client";

const isAdmin = async (prisma: PrismaClient, userId: number): Promise<boolean> => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!!user && hasGroup(user, "admin")) {
    return true;
  }
  return false;
};

export default isAdmin;
