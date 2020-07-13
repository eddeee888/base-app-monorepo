import { PrismaClient } from "@prisma/client";
import { hasGroup } from "models/user";

interface CanUserUpdateUserParams {
  prisma: PrismaClient;
  userId: number;
  targetUserId: number;
}

export const canUserUpdateUser = async (params: CanUserUpdateUserParams): Promise<boolean> => {
  const { prisma, userId, targetUserId } = params;

  const user = await prisma.user.findOne({ where: { id: userId } });
  if (!user) {
    return false;
  }

  const targetUser = await prisma.user.findOne({ where: { id: targetUserId } });
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
