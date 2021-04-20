/**
 * - `specialMode`: "" or "maintenance"
 *
 * - `graphqlEndpointSsr`: can be used if we want to have a different endpoint for SSR.
 * e.g. in container in dev, we can use http://server:40002/graphql instead of https://server.app.dev/graphql
 * If not provided, always fallback to `graphqlEndpoint`
 *
 * - `graphqlEndpoint`: GraphQL endpoint to be used on the client
 * ( and as fallback if `graphqlEndpointSsr` is not provided )
 *
 * - `websocketGraphqlEndpoint`: websocket GraphQL endpoint. Optional
 */
interface PublicEnvironment {
  appName: string;
  appOrigin: string;
  specialMode: string;
  graphqlEndpointSsr: string;
  graphqlEndpoint: string;
  websocketGraphqlEndpoint: string | undefined;
}

export const publicEnv: PublicEnvironment = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || "",
  appOrigin: process.env.NEXT_PUBLIC_APP_ORIGIN || "",
  specialMode: process.env.NEXT_PUBLIC_SPECIAL_MODE || "",
  graphqlEndpointSsr: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_SSR || "",
  graphqlEndpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "",
  websocketGraphqlEndpoint: process.env.NEXT_PUBLIC_WEBSOCKET_GRAPHQL_ENDPOINT,
};
