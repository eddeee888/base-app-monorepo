import { type ExtendedPrismaClient, User } from '@bam/main-prisma';

export type JWT = string;
export interface ResolverContext<U = User | null> {
  viewer: U;
  prisma: ExtendedPrismaClient;
}

export type ResolverContextLoggedIn = ResolverContext<User>;
export type ResolverContextNotLoggedIn = ResolverContext<null>;
