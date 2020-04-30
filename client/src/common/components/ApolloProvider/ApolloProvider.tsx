import React, { FunctionComponent } from "react";
import { ApolloProvider as DefaultApolloProvider } from "@apollo/react-hooks";
import createApolloClient from "common/shared-apollo/createApolloClient";

const apolloClient = createApolloClient({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT });

const ApolloProvider: FunctionComponent<{}> = ({ children }) => (
  <DefaultApolloProvider client={apolloClient}>{children}</DefaultApolloProvider>
);

export default ApolloProvider;
