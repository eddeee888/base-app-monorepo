import { Prisma } from 'prisma/generated/client';
import { isAdmin } from 'models/user';

export const canUserUpdateUser = async (
  prisma: Prisma,
  userId: string,
  targetUserId: string
): Promise<boolean> => {
  const userExists = await prisma.$exists.user({ id: userId });
  if (!userExists) {
    return false;
  }

  const targetUserExists = await prisma.$exists.user({ id: targetUserId });
  if (!targetUserExists) {
    return false;
  }

  if (userId === targetUserId) {
    return true;
  }

  if (await isAdmin(prisma, userId)) {
    return true;
  }

  return false;
};
