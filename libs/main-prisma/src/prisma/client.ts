import { PrismaClient } from './generated/prisma-client-js';

export interface CreatePrismaClientParams {
  mode?: 'development' | 'production' | 'test';
}

export const createPrismaClient = ({ mode = 'development' }: CreatePrismaClientParams): PrismaClient => {
  const prisma = new PrismaClient();

  if (mode === 'development') {
    prisma.$use(async (params, next) => {
      const before = Date.now();
      const result = await next(params);
      const after = Date.now();
      console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);
      return result;
    });
  }

  return prisma;
};
