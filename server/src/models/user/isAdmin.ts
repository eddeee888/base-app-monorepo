import { Prisma } from "prisma/generated/client";
import hasGroup from "models/user/hasGroup";

const isAdmin = async (prisma: Prisma, userId: string): Promise<boolean> => {
  const user = await prisma.user({ id: userId });
  if (!!user && hasGroup(user, "admin")) {
    return true;
  }
  return false;
};

export default isAdmin;
