import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink, Observable } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import { IncomingHttpHeaders } from "http";

interface CreateApolloClientParams {
  uri: string | undefined;
  initialState?: NormalizedCacheObject;
  ssrHeaders?: IncomingHttpHeaders;
}

const isSsr = (): boolean => typeof window === "undefined";

const createApolloClient = ({ uri, initialState = {}, ssrHeaders }: CreateApolloClientParams): ApolloClient<NormalizedCacheObject> => {
  const cache = new InMemoryCache().restore(initialState);
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
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          // TODO:ERROR set up logging service if needed here
          if (typeof window === "undefined") {
            // If this is on the server, just print it out
            console.log("*** graphQLErrors in SSR:");
            console.error(graphQLErrors);
          } else {
            console.warn("graphQLErrors in client.js");
          }
        }
        if (networkError) {
          // TODO:ERROR handle network error if needed here
          if (typeof window === "undefined") {
            // If this is on the server, just print it out
            console.log("*** networkError in SSR:");
            console.error(networkError);
          } else {
            console.warn("onNetworkError in client.js");
          }
        }
      }),
      requestLink,
      withClientState({
        defaults: {
          isConnected: true,
        },
        resolvers: {
          Mutation: {
            updateNetworkStatus: (_: any, { isConnected }: any, { cache }: any) => {
              cache.writeData({ data: { isConnected } });
              return null;
            },
          },
        },
        cache,
      }),
      new HttpLink({
        uri,
        credentials: "include",
      }),
    ]),
    cache,
    ssrMode: isSsr(),
    ssrForceFetchDelay: 100,
  });

  return client;
};

export default createApolloClient;
