import { ContextParameters } from 'graphql-yoga/dist/types';
import { GetTokenFromRequest, SetTokenToResponse } from 'src/helpers/headers';
import { Sign, Verify } from 'src/helpers/utils/jwt';
import { ComparePassword, HashPassword } from 'src/helpers/utils/password';
import { Prisma, User } from 'src/web/graphql/generated/prisma-client';

export type JWT = string;
export interface ResolverContext extends ContextParameters {
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
