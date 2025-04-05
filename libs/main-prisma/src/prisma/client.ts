import { PrismaClient } from './generated/prisma-client-js';
import { performance } from 'perf_hooks';
import * as util from 'util';

export interface CreatePrismaClientParams {
  mode?: 'development' | 'production' | 'test';
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createPrismaClient = ({ mode = 'development' }: CreatePrismaClientParams) => {
  const prisma = new PrismaClient();

  if (mode === 'development') {
    return prisma.$extends({
      query: {
        async $allOperations({ operation, model, args, query }) {
          const start = performance.now();
          const result = await query(args);
          const end = performance.now();
          const time = end - start;
          console.log(util.inspect({ model, operation, args, time }, { showHidden: false, depth: null, colors: true }));
          return result;
        },
      },
    });
  }

  return prisma;
};

export type ExtendedPrismaClient = ReturnType<typeof createPrismaClient>;
