import { prisma } from 'src/web/graphql/generated/prisma-client';

const setupTestDatabase = async () => {
  await prisma.deleteManyUsers({ id_not: '0' });
};

export default setupTestDatabase;
