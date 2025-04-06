import type { NextApiRequest, NextApiResponse } from 'next';
import { createYoga, createSchema } from 'graphql-yoga';
import { useDisableIntrospection } from '@graphql-yoga/plugin-disable-introspection';
import type { User } from '@bam/main-prisma';
import { routes } from '@bam/routing';
import { resolvers, typeDefs, type ResolverContext } from '@bam/graph-backend';
import { prisma } from '../../_common/database/client';

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

interface NextDefaultContext {
  req: NextApiRequest;
  res: NextApiResponse;
}
const { handleRequest } = createYoga<NextDefaultContext, ResolverContext>({
  schema: createSchema<NextDefaultContext & ResolverContext>({
    typeDefs: typeDefs,
    resolvers: resolvers,
  }),
  graphqlEndpoint: routes.apiGraphQL(),
  parserAndValidationCache: true,
  landingPage: isDev,
  graphiql: isDev,
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
  fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS };
