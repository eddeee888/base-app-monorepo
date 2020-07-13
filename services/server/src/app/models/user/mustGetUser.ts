import { PrismaClient, User } from "@prisma/client";

const mustGetUser = async (prisma: PrismaClient, userId: number): Promise<User> => {
  const user = await prisma.user.findOne({ where: { id: userId } });

  if (!user) {
    throw new Error("User does not exist");
  }

  return user;
};

export default mustGetUser;
