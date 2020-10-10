import { PrismaClient, User } from "@prisma/client";
import { UserLoader } from "./loaders";

export type JWT = string;
export type DateTime = string;
export interface ResolverContext<U = User | null> {
  prisma: PrismaClient;
  viewer: U;
  loaders: {
    user: UserLoader;
  };
}

export type ResolverContextLoggedIn = ResolverContext<User>;
export type ResolverContextNotLoggedIn = ResolverContext<null>;
