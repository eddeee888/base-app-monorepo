import { hasGroup } from "@libs/models/user";
import { PrismaClient } from "@prisma/client";

export interface CanUserUpdateUserParams {
  prisma: PrismaClient;
  userId: number;
  targetUserId: number;
}

const canUserUpdateUser = async (params: CanUserUpdateUserParams): Promise<boolean> => {
  const { userId, targetUserId, prisma } = params;

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    return false;
  }

  const targetUser = await prisma.user.findUnique({ where: { id: targetUserId } });
  if (!targetUser) {
    return false;
  }

  if (userId === targetUserId) {
    return true;
  }

  if (hasGroup(user, "admin")) {
    return true;
  }

  return false;
};

export default canUserUpdateUser;
