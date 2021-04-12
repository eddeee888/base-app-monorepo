import { PrismaClient, User } from "@prisma/client";

export const mustGetUser = async (prisma: PrismaClient, userId: number): Promise<User> => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    throw new Error("User does not exist");
  }

  return user;
};
