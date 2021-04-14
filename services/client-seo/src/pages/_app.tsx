import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { muiTheme } from "~/common/shared-styles/muiTheme";
import { CacheProvider, Global, css } from "@emotion/core";
import { cache } from "emotion";
import { ApolloProvider, ApolloClient, NormalizedCacheObject } from "@apollo/client";
import createApolloClient from "~/common/shared-apollo/createApolloClient";
import withApollo from "next-with-apollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import Header from "~/common/components/Header";
import createBaseCss from "~/common/shared-styles/createBaseCss";
import createFontsStyles from "~/common/shared-styles/createFontsStyles";
import ErrorBoundary from "~/common/components/ErrorBoundary";
import MaintenancePage from "~/common/shared-page-messages/MaintenancePage";
import generateUrlClientSeoStaticImage from "~/routes/clientSeoStaticImage/generateUrlClientSeoStaticImage";
import isSsr from "~/common/components/isSsr";

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
    const isInMaintenance = process.env.NEXT_PUBLIC_SPECIAL_MODE === "maintenance";

    return (
      <>
        <Head>
          <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <CacheProvider value={cache}>
          <Global
            styles={css`
              ${createBaseCss()}
              ${createFontsStyles("/client-seo-static/fonts")}
            `}
          ></Global>
          {isInMaintenance && (
            <MaintenancePage
              appName={process.env.NEXT_PUBLIC_APP_NAME}
              imageSrc={generateUrlClientSeoStaticImage({ path: { imageName: "maintenance.png" } })}
            />
          )}
          {!isInMaintenance && (
            <ApolloProvider client={apollo}>
              <ThemeProvider theme={muiTheme}>
                <ErrorBoundary>
                  <Header />
                  <Component {...pageProps} />
                </ErrorBoundary>
              </ThemeProvider>
            </ApolloProvider>
          )}
        </CacheProvider>
      </>
    );
  }
}

interface ErrorWithCode extends Error {
  code: number;
}

const MyAppWithApollo = withApollo(
  ({ initialState, headers }) => {
    // NEXT_PUBLIC_GRAPHQL_ENDPOINT_SSR can be used if we want to have a different endpoint for SSR.
    // e.g. in container in dev, we can use http://server:40002/graphql instead of https://server.app.dev/graphql
    // If not provided, always fallback to NEXT_PUBLIC_GRAPHQL_ENDPOINT
    const uri =
      isSsr() && process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_SSR
        ? process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_SSR
        : process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

    const ssrHeaders = headers ?? {};
    // Remove host header if exists. Otherwise we'll get something like:
    // request to https://domain.com/graphql failed, reason: Hostname/IP does not match certificate's altnames:
    // Host: bucket.s3.amazonaws.com. is not in the cert's altnames: DNS:*.execute-api.us-east-1.amazonaws.com
    if ("host" in ssrHeaders) {
      delete ssrHeaders.host;
    }

    return createApolloClient({
      uri: uri,
      webSocketUri: isSsr() ? undefined : process.env.NEXT_PUBLIC_WEBSOCKET_GRAPHQL_ENDPOINT, // If SSR, do not need websocket
      initialState: initialState,
      ssrHeaders: headers,
    });
  },
  {
    getDataFromTree,
    onError: (err, ctx) => {
      if (ctx && ctx.res && "code" in err) {
        const error = (err as any) as ErrorWithCode;
        ctx.res.statusCode = error.code;
        return;
      }
    },
  }
)(MyApp);

export default MyAppWithApollo;
