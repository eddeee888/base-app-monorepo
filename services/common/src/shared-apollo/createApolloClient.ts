import { ApolloClient, ApolloLink, Observable, InMemoryCache, NormalizedCacheObject, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { IncomingHttpHeaders } from "http";

interface CreateApolloClientParams {
  uri: string | undefined;
  initialState?: NormalizedCacheObject;
  ssrHeaders?: IncomingHttpHeaders;
}

const isSsr = (): boolean => typeof window === "undefined";

const createApolloClient = ({ uri, initialState = {}, ssrHeaders }: CreateApolloClientParams): ApolloClient<NormalizedCacheObject> => {
  const httpLink = new HttpLink({
    uri,
    credentials: "include",
  });

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
    link: ApolloLink.from([errorLink, requestLink, httpLink]),
    cache: new InMemoryCache().restore(initialState),
    ssrMode: isSsr(),
    ssrForceFetchDelay: 100,
  });

  return client;
};

export default createApolloClient;
