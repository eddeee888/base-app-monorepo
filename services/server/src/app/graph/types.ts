import { GetTokenFromRequest, SetTokenToResponse } from "@libs/headers";
import { Sign, Verify } from "@libs/jwt";
import { Password } from "@libs/password";
import { PrismaClient, User } from "@prisma/client";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";

export type JWT = string;
export type DateTime = string;
export interface ResolverContext<U = User | null> extends ExpressContext {
  prisma: PrismaClient;
  viewer: U;
  utils: {
    headers: {
      getTokenFromRequest: GetTokenFromRequest;
      setTokenToResponse: SetTokenToResponse;
    };
    jwt: {
      sign: Sign;
      verify: Verify;
    };
    password: Password;
  };
}

export type ResolverContextLoggedIn = ResolverContext<User>;
export type ResolverContextNotLoggedIn = ResolverContext<null>;
