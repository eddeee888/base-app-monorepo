import React, { FunctionComponent } from "react";
import { ApolloProvider as DefaultApolloProvider } from "@apollo/react-hooks";
import createApolloClient from "common/shared-apollo/createApolloClient";
import env from "env";

const apolloClient = createApolloClient({ uri: env.graphqlEndpoint });

const ApolloProvider: FunctionComponent<{}> = ({ children }) => (
  <DefaultApolloProvider client={apolloClient}>{children}</DefaultApolloProvider>
);

export default ApolloProvider;
