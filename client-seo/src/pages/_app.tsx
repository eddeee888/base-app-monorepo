import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { muiTheme } from "common/shared-styles/muiTheme";
import { CacheProvider, Global, css } from "@emotion/core";
import { cache } from "emotion";
import { ApolloProvider } from "@apollo/react-hooks";
import createApolloClient from "common/shared-apollo/createApolloClient";
import withApollo from "next-with-apollo";
import { getDataFromTree } from "@apollo/react-ssr";
import ApolloClient from "apollo-client";
import { NormalizedCacheObject } from "apollo-cache-inmemory";
import Header from "common/components/Header";
import createBaseCss from "common/shared-styles/createBaseCss";

class MyApp extends App<{ apollo: ApolloClient<NormalizedCacheObject> }> {
  componentDidMount(): void {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render(): JSX.Element {
    const { Component, pageProps, apollo } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <CacheProvider value={cache}>
          <Global
            styles={css`
              ${createBaseCss()}
            `}
          ></Global>
          <ApolloProvider client={apollo}>
            <ThemeProvider theme={muiTheme}>
              <Header />
              <Component {...pageProps} />
            </ThemeProvider>
          </ApolloProvider>
        </CacheProvider>
      </React.Fragment>
    );
  }
}

const MyAppWithApollo = withApollo(
  ({ initialState, headers }) => {
    // NEXT_PUBLIC_GRAPHQL_ENDPOINT_SSR can be used if we want to have a different endpoint for SSR.
    // e.g. in container in dev, we can use http://server:40002/graphql instead of https://server.app.dev/graphql
    // If not provided, always fallback to NEXT_PUBLIC_GRAPHQL_ENDPOINT
    const uri =
      typeof window === "undefined" && process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_SSR
        ? process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_SSR
        : process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

    return createApolloClient({
      uri,
      initialState,
      ssrHeaders: headers,
    });
  },
  {
    getDataFromTree,
  }
)(MyApp);

export default MyAppWithApollo;
