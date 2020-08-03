import { HeadersService } from "@libs/headers";
import { JwtService } from "@libs/jwt";
import { Password } from "@libs/password";
import { PrismaClient, User } from "@prisma/client";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";

export type JWT = string;
export type DateTime = string;
export interface ResolverContext<U = User | null> extends ExpressContext {
  prisma: PrismaClient;
  viewer: U;
  libs: {
    headers: HeadersService;
    jwt: JwtService;
    password: Password;
  };
}

export type ResolverContextLoggedIn = ResolverContext<User>;
export type ResolverContextNotLoggedIn = ResolverContext<null>;
