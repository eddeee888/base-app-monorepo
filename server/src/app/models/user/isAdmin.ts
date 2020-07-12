import { PrismaClient } from "@prisma/client";
import hasGroup from "models/user/hasGroup";

const isAdmin = async (prisma: PrismaClient, userId: number): Promise<boolean> => {
  const user = await prisma.user.findOne({ where: { id: userId } });
  if (!!user && hasGroup(user, "admin")) {
    return true;
  }
  return false;
};

export default isAdmin;
