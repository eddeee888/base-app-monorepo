import { ApolloClient, ApolloLink, Observable, InMemoryCache, NormalizedCacheObject, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { onError } from "@apollo/client/link/error";
import { IncomingHttpHeaders } from "http";

interface CreateApolloClientParams {
  uri: string | undefined;
  webSocketUri: string | undefined;
  initialState?: NormalizedCacheObject;
  ssrHeaders?: IncomingHttpHeaders;
}

const isSsr = (): boolean => typeof window === "undefined";

const createApolloClient = (params: CreateApolloClientParams): ApolloClient<NormalizedCacheObject> => {
  const { uri, webSocketUri, initialState = {}, ssrHeaders } = params;

  const httpLink = new HttpLink({
    uri: uri,
    credentials: "include",
  });

  const wsLink =
    webSocketUri !== undefined
      ? new WebSocketLink({
          uri: webSocketUri,
          options: {
            connectionParams: {}, // TODO: decide how to validate via websocket API
            lazy: true,
            reconnect: true,
            reconnectionAttempts: 3,
            inactivityTimeout: 18000, // Wait 3 minutes before disconnecting when no active subscription e.g. moving away from a page with subscription
          },
        })
      : undefined;

  const transportLink = wsLink
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return definition.kind === "OperationDefinition" && definition.operation === "subscription";
        },
        wsLink,
        httpLink
      )
    : httpLink;

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    const errorLoc = typeof window === "undefined" ? "SSR" : "Browser";

    if (graphQLErrors) {
      const prefix = `graphQLErrors in ${errorLoc}`;
      console.warn(prefix);
      graphQLErrors.map((e) => {
        console.error(new Error(`${prefix}. Message: ${e.message}`));
      });
    }
    if (networkError) {
      const prefix = `networkError in ${errorLoc}`;
      console.error(new Error(`${prefix}. Message: ${networkError.message}`));
    }
  });

  const requestLink = new ApolloLink(
    (operation, forward) =>
      new Observable((observer) => {
        let handle: any;
        Promise.resolve(operation)
          .then(async (operation) => {
            operation.setContext({ headers: { ...ssrHeaders } });
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
    cache: new InMemoryCache().restore(initialState),
    ssrMode: isSsr(),
    ssrForceFetchDelay: 100,
  });

  return client;
};

export default createApolloClient;
