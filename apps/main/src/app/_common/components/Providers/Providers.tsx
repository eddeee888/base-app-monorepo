'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider as BaseApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from '@apollo/client-integration-nextjs';
import { routes } from '@bam/routing';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ApolloNextAppProvider>{children}</ApolloNextAppProvider>;
};

/**
 * ApolloNextAppProvider
 *
 * If you use the app directory, each Client Component will be SSR-rendered for the initial request.
 * So you will need to use this package.
 *
 * https://github.com/apollographql/apollo-client-nextjs#in-ssr for more info
 */
const ApolloNextAppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <BaseApolloNextAppProvider makeClient={makeIsomorphicApolloClient}>{children}</BaseApolloNextAppProvider>;
};
const makeIsomorphicApolloClient = (): ApolloClient<unknown> => {
  const isOnServer = typeof window === 'undefined';

  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: isOnServer ? `${process.env.SERVER_URL_INTERNAL}${routes.apiGraphQL()}` : routes.apiGraphQL(),
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    // you can override the default `fetchOptions` on a per query basis
    // via the `context` property on the options passed as a second argument
    // to an Apollo Client data fetching hook, e.g.:
    // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: isOnServer
      ? ApolloLink.from([
          // in a SSR environment, if you use multipart features like
          // @defer, you need to decide how to handle these.
          // This strips all interfaces with a `@defer` directive from your queries.
          new SSRMultipartLink({ stripDefer: true }),
          httpLink,
        ])
      : httpLink,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
};
