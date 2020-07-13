import { PrismaClient } from "@prisma/client";

export interface CanUserBeCreatedParams {
  prisma: PrismaClient;
  email: string;
}

export const canUserBeCreated = async ({ prisma, email }: CanUserBeCreatedParams): Promise<boolean> => {
  const existingUser = await prisma.user.findOne({ where: { email } });

  return !existingUser;
};
