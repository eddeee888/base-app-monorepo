import { GetTokenFromRequest, SetTokenToResponse } from 'libs/headers';
import { Sign, Verify } from 'libs/jwt';
import { ComparePassword, HashPassword } from 'libs/password';
import { Prisma, User } from 'prisma/generated/client';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

export type JWT = string;
export interface ResolverContext extends ExpressContext {
  prisma: Prisma;
  viewer: User | null;
  utils: {
    headers: {
      getTokenFromRequest: GetTokenFromRequest;
      setTokenToResponse: SetTokenToResponse;
    };
    jwt: {
      sign: Sign;
      verify: Verify;
    };
    password: {
      compare: ComparePassword;
      hash: HashPassword;
    };
  };
}
