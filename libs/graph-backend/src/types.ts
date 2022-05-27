import { PrismaClient, User } from '@bam/main-prisma';

export type JWT = string;
export interface ResolverContext<U = User | null> {
  viewer: U;
  prisma: PrismaClient;
}

export type ResolverContextLoggedIn = ResolverContext<User>;
export type ResolverContextNotLoggedIn = ResolverContext<null>;
