import { createPrismaClient } from "./client";

const seed = async (): Promise<void> => {
  const prisma = createPrismaClient({ mode: "development" });

  try {
    const numberOfUsers = 30;

    const createUserPromises = new Array(numberOfUsers).fill(0).map(async (_value, index) => {
      return prisma.user.create({
        data: {
          email: `user+${index}@example.dev`,
          firstName: `User ${index}`,
          lastName: `Lastname ${index}`,
          password: "dummypassword", // Use hashed password!
          userGroup: {
            user: true,
            admin: index === 1 ? true : false,
          },
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
  console.log("*** Finished seeding...");
})();
