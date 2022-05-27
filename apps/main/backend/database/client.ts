import { createPrismaClient, PrismaClient } from '@bam/main-prisma';

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || createPrismaClient({ mode: process.env.NODE_ENV });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
