import { Prisma, User } from 'prisma/generated/client';

const mustGetUser = async (prisma: Prisma, userId: string): Promise<User> => {
  const user = await prisma.user({ id: userId });

  if (!user) {
    throw new Error('User does not exist');
  }

  return user;
};

export default mustGetUser;
