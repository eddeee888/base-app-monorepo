import { PrismaClient } from "@prisma/client";

const tableNames = ["User", "File"];

const reset = async (): Promise<void> => {
  const prisma = new PrismaClient();

  try {
    for (const tableName of tableNames) {
      await prisma.executeRaw(`DELETE FROM ${tableName};`);
      await prisma.executeRaw(`ALTER TABLE ${tableName} AUTO_INCREMENT = 1;`);
    }
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.disconnect();
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
