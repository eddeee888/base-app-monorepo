import { createPrismaClient } from "../src/libs/prismaClient";

if (!process.env.SERVER_DATABASE_NAME) {
  throw new Error("Missing SERVER_DATABASE_NAME");
}

const DATABASE_NAME = process.env.SERVER_DATABASE_NAME;

const reset = async (): Promise<void> => {
  const prisma = createPrismaClient({ mode: "development" });

  try {
    console.log(`Dropping ${DATABASE_NAME} if exists...`);
    await prisma.$executeRaw(`DROP DATABASE IF EXISTS ${DATABASE_NAME};`);
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
};

(async () => {
  try {
    await reset();
    console.log("*** Finished resetting...");
  } catch (e) {
    console.error(e);
  }
})();
