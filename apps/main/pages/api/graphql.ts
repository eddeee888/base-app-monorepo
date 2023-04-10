import { NextApiRequest, NextApiResponse } from 'next';
import { createYoga, createSchema } from 'graphql-yoga';
import { useDisableIntrospection } from '@envelop/disable-introspection';
import type { User } from '@bam/main-prisma';
import { resolvers, typeDefs } from '@bam/graph-backend';
import { prisma } from '../../backend/database/client';

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

interface NextDefaultContext {
  req: NextApiRequest;
  res: NextApiResponse;
}
const server = createYoga<NextDefaultContext>({
  schema: createSchema<NextDefaultContext>({
    typeDefs: typeDefs,
    resolvers: resolvers,
  }),
  landingPage: isDev,
  graphiql: isDev,
  parserCache: true,
  validationCache: true,
  maskedErrors: !isDev,
  // eslint-disable-next-line react-hooks/rules-of-hooks
  plugins: [!isDev && useDisableIntrospection()],
  context: async () => {
    const user: User | null = null;

    return {
      prisma,
      viewer: user,
    };
  },
});

export default server;
