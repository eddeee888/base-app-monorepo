import { createPasswordService } from "../src/libs/passwordService";
import { createPrismaClient } from "../src/libs/prismaClient";

const seed = async (): Promise<void> => {
  const prisma = createPrismaClient({ mode: "development" });

  try {
    const numberOfUsers = 30;

    const createUserPromises = new Array(numberOfUsers).fill(0).map(async (value, index) => {
      return prisma.user.create({
        data: {
          email: `user+${index}@bam.dev`,
          firstName: `User ${String(index)}`,
          lastName: `Lastname ${String(index)}`,
          password: await createPasswordService().hash("12345678"),
          userGroup: JSON.stringify({
            user: true,
            admin: index === 1 ? true : false,
          }),
        },
      });
    });

    await Promise.all(createUserPromises);
  } catch (e) {
    console.log(e);
  } finally {
    await prisma.$disconnect();
  }
};

(async () => {
  try {
    await seed();
    console.log("*** Finished seeding...");
  } catch (e) {
    console.error(e);
  }
})();
