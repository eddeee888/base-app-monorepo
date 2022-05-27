import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  Observable,
  NormalizedCacheObject,
  split,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { onError, ErrorResponse } from '@apollo/client/link/error';
import type { IncomingHttpHeaders } from 'http';
import type { GraphQLError } from 'graphql';
import { routes } from '@bam/routing';
import introspectionResult from '../generated/introspectionResult.generated';

interface CreateApolloClientParams {
  uri?: string;
  webSocket?: {
    url: string;
    csrfToken: string;
  };
  isSsr?: boolean;
  headers?: IncomingHttpHeaders;
  initialState?: NormalizedCacheObject;
  onGraphqlError?: (error: GraphQLError) => void;
  onNetworkError?: (error: NonNullable<ErrorResponse['networkError']>) => void;
}

export const createApolloClient = (params: CreateApolloClientParams = {}): ApolloClient<NormalizedCacheObject> => {
  const {
    uri = routes.apiGraphQL(),
    webSocket,
    headers,
    onGraphqlError = console.error,
    onNetworkError = console.error,
    initialState = {},
    isSsr = false,
  } = params;

  // Link: Transport i.e. HTTP and WebSocket
  const httpLink = new HttpLink({ uri, credentials: 'include' });
  const wsLink = webSocket
    ? new GraphQLWsLink(
        createClient({
          url: webSocket.url,
          connectionParams: { 'X-Csrf-Token': webSocket.csrfToken },
        })
      )
    : undefined;

  const transportLink = wsLink
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
        },
        wsLink,
        httpLink
      )
    : httpLink;

  // Link: Error
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(onGraphqlError);
    }
    if (networkError) {
      onNetworkError(networkError);
    }
  });

  // Link: Request
  const requestLink = new ApolloLink(
    (operation, forward) =>
      new Observable((observer) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let handle: any;
        Promise.resolve(operation)
          .then(async (operation) => {
            operation.setContext({ headers: { ...headers } });
          })
          .then(() => {
            if (forward) {
              handle = forward(operation).subscribe({
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer),
              });
            }
          })
          .catch(observer.error.bind(observer));

        return () => {
          if (handle) {
            handle.unsubscribe();
          }
        };
      })
  );

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, requestLink, transportLink]),
    cache: new InMemoryCache({ possibleTypes: introspectionResult.possibleTypes }).restore(initialState),
    ssrMode: isSsr,
    ssrForceFetchDelay: 100,
  });

  return client;
};
