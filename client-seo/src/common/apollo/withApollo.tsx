import React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloLink } from "apollo-link";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import { NextComponentType, NextPageContext } from "next";
import { IncomingHttpHeaders } from "http";
import { onError } from "apollo-link-error";
import { withClientState } from "apollo-link-state";

let globalApolloClient: ApolloClient<any> | null = null;

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param  {HttpLink} [httpLink]
 */
function createApolloClient(initialState = {}, httpLink: HttpLink): ApolloClient<any> {
  const cache = new InMemoryCache().restore(initialState);

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    cache,
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          // TODO set up logging service if needed here
          console.warn("graphQLErrors in apolloClient");
        }
        if (networkError) {
          // TODO handle network error if needed here
          console.warn("onNetworkError in apolloClient");
        }
      }),
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
      httpLink,
    ]),
  });
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 * @param  {Object} headers
 * @param  {Object} options
 */
function initApolloClient(initialState: object, headers?: IncomingHttpHeaders): ApolloClient<any> {
  const uri = process.env.GRAPHQL_ENDPOINT;

  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === "undefined") {
    const httpLink = new HttpLink({
      uri,
      credentials: "same-origin",
      headers: {
        cookie: headers && headers["cookie"] ? headers["cookie"] : "",
      },
      fetch,
    });
    return createApolloClient(initialState, httpLink);
  }

  // Reuse client on the client-side
  if (!globalApolloClient) {
    const httpLink = new HttpLink({
      uri,
      credentials: "same-origin",
    });
    globalApolloClient = createApolloClient(initialState, httpLink);
  }

  return globalApolloClient;
}

async function handleServerSideError(ctx: NextPageContext, error: Error): Promise<void> {
  ctx.res!.statusCode = 500;
  ctx.res!.setHeader("Content-Type", "text/html");
  ctx.res!.end(error.message);
}

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
function withApollo(PageComponent: NextComponentType, { ssr = true } = {}): (props: any) => React.ReactNode {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }: any): React.ReactNode => {
    const client = apolloClient || initApolloClient(apolloState, pageProps.requestHeaders);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== "production") {
    const displayName = PageComponent.displayName || PageComponent.name || "Component";

    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.");
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx: NextPageContext & { apolloClient?: ApolloClient<any> }) => {
      const { AppTree } = ctx;

      // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProps`.
      const apolloClient = (ctx.apolloClient = initApolloClient({}, ctx.req && ctx.req.headers));

      // Run wrapped getInitialProps methods
      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      // Only on the server:
      if (typeof window === "undefined") {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        // Only if ssr is enabled
        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import("@apollo/react-ssr");
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient,
                }}
              />
            );
          } catch (error) {
            await handleServerSideError(ctx, error);
            return;
          }

          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind();
        }
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState,
      };
    };
  }

  return WithApollo;
}

export default withApollo;
