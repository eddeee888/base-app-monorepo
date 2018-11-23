import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, Observable } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';

const cache = new InMemoryCache();

const request = async operation => {
  const token = await localStorage.getItem('token');
  operation.setContext({
    headers: {
      authorisation: token
    }
  });
};

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle;
      Promise.resolve(operation)
        .then(oper => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) {
          handle.unsubscribe();
        }
      };
    })
);

export default new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        // TODO set up logging service if needed here
        console.warn('graphQLErrors in client.js');
      }
      if (networkError) {
        // TODO handle network error if needed here
        console.warn('onNetworkError in client.js');
      }
    }),
    requestLink,
    withClientState({
      defaults: {
        isConnected: true
      },
      resolvers: {
        Mutation: {
          updateNetworkStatus: (_, { isConnected }, { cache }) => {
            cache.writeData({ data: { isConnected } });
            return null;
          }
        }
      },
      cache
    }),
    new HttpLink({
      uri: process.env.graphqlEndpoint,
      credentials: 'include'
    })
  ]),
  cache
});
