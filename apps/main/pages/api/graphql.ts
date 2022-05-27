import { NextApiRequest, NextApiResponse } from 'next';
import { createServer } from '@graphql-yoga/node';
import { enableIf } from '@envelop/core';
import { useDisableIntrospection } from '@envelop/disable-introspection';
import { User } from '@bam/main-prisma';
import { resolvers, getTypeDefs } from '@bam/graph-backend';
import { prisma } from '../../backend/database/client';

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

const server = createServer<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: {
    typeDefs: getTypeDefs(),
    resolvers: resolvers,
  },
  graphiql: isDev,
  parserCache: true,
  validationCache: true,
  maskedErrors: !isDev,
  // eslint-disable-next-line react-hooks/rules-of-hooks
  plugins: [enableIf(!isDev, useDisableIntrospection())],
  context: async () => {
    const user: User | null = null;

    return {
      prisma,
      viewer: user,
    };
  },
});

export default server;
