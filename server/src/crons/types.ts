import { PrismaClient } from "@prisma/client";

export interface CronContext {
  prisma: PrismaClient;
}
