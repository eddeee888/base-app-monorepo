import { ContextParameters } from 'graphql-yoga/dist/types';
import { Prisma, User } from 'src/web/graphql/generated/prisma-client';

export type JWT = string;
export interface ResolverContext extends ContextParameters {
  prisma: Prisma;
  viewer: User | null;
}
