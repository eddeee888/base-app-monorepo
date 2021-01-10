import { PrismaClient } from "@prisma/client";

export interface CanUserBeCreatedParams {
  prisma: PrismaClient;
  email: string;
}

const canUserBeCreated = async ({ prisma, email }: CanUserBeCreatedParams): Promise<boolean> => {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  return !existingUser;
};

export default canUserBeCreated;
