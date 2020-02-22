import React, { FunctionComponent } from 'react';
import { ApolloProvider as DefaultApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apolloClient';

const ApolloProvider: FunctionComponent<{}> = ({ children }) => (
  <DefaultApolloProvider client={apolloClient}>{children}</DefaultApolloProvider>
);

export default ApolloProvider;
