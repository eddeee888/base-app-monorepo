import React, { FunctionComponent } from "react";
import { ApolloProvider as DefaultApolloProvider } from "@apollo/client";
import createApolloClient from "~/common/shared-apollo/createApolloClient";
import env from "~/env";

const apolloClient = createApolloClient({
  uri: env.graphqlEndpoint,
  webSocketUri: env.websocketGraphqlEndpoint,
});

const ApolloProvider: FunctionComponent = ({ children }) => <DefaultApolloProvider client={apolloClient}>{children}</DefaultApolloProvider>;

export default ApolloProvider;
