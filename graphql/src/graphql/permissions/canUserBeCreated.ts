import { Prisma } from 'prisma/generated/client';

export const canUserBeCreated = async (
  prisma: Prisma,
  email: string
): Promise<boolean> => {
  const existingUser = await prisma.user({ email });

  return !existingUser;
};
