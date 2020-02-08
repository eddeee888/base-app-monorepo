import { Prisma } from 'prisma/generated/client';

export interface CronContext {
  prisma: Prisma;
}
