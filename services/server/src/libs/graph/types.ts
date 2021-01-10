import { PrismaClient, User } from "@prisma/client";

export type JWT = string;
export type DateTime = string;
export interface ResolverContext<U = User | null> {
  prisma: PrismaClient;
  viewer: U;
}

export type ResolverContextLoggedIn = ResolverContext<User>;
export type ResolverContextNotLoggedIn = ResolverContext<null>;
