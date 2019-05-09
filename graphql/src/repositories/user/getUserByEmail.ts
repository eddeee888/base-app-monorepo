import { prisma, User } from 'src/web/graphql/generated/prisma-client';

type GetByEmailFn = (email: string) => Promise<User>;

const getUserByEmail: GetByEmailFn = async email => {
  return await prisma.user({ email });
};

export default getUserByEmail;
