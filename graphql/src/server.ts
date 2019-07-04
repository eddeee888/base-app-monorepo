import { formatError } from '@bit/eddeee888.base-react-app-utils.graphql';
import cookieParser = require('cookie-parser');
import { importSchema } from 'graphql-import';
import { GraphQLServer } from 'graphql-yoga';
import { getTokenFromRequest, setTokenToResponse } from 'src/helpers/headers';
import { sign, verify } from 'src/helpers/utils/jwt';
import { compare, hash } from 'src/helpers/utils/password';
import tokenVerifier from 'src/middleware/tokenVerifier';
import { prisma } from 'src/web/graphql/generated/prisma-client';
import { resolvers } from 'src/web/graphql/resolvers';
import directiveResolvers from 'src/web/graphql/directiveResolvers';
import { getViewerFromRequest } from 'src/helpers/headers';

const PORT = process.env.PORT || 8000;

const server = new GraphQLServer({
  typeDefs: importSchema('./src/schemas/schema.graphql'),
  resolvers: resolvers as any, // https://github.com/prisma/graphql-yoga/issues/379
  directiveResolvers,
  context: async contextParams => ({
    ...contextParams,
    prisma,
    viewer: await getViewerFromRequest(contextParams.request, prisma),
    utils: {
      headers: {
        getTokenFromRequest,
        setTokenToResponse
      },
      jwt: {
        sign,
        verify
      },
      password: {
        compare,
        hash
      }
    }
  })
});

server.express.use(cookieParser());
server.express.use(tokenVerifier);

server.start(
  {
    port: PORT,
    endpoint: '/graphql',
    subscriptions: '/graphql',
    playground: '/graphql/interactive',
    formatError,
    cors: { origin: process.env.SERVER_NAME, credentials: true }
  },
  () => console.log(`Server is running on http://localhost:${PORT}`)
);
