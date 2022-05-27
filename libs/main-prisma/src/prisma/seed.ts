import { createPrismaClient } from './client';

const seed = async (): Promise<void> => {
  const prisma = createPrismaClient({ mode: 'development' });
  try {
    // Seed User
    const numberOfUsers = 5;
    const createUserPromises = new Array(numberOfUsers).fill(0).map(async (_value, index) => {
      return prisma.user.create({
        data: {
          email: `user+${index}@example.dev`,
          name: `User ${String(index)}`,
          emailVerified: new Date(),
        },
      });
    });
    await Promise.all(createUserPromises);
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
};

(async () => {
  await seed();
  console.log('*** Finished seeding...');
})();
