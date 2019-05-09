import AppRouter from 'AppRouter';
import ThemeProvider from 'common/components/ThemeProvider';
import { ViewerProvider } from 'common/components/ViewerContext';
import createGlobalStyles from 'common/helpers/createGlobalStyles';
import graphqlClient from 'common/helpers/graphql/client';
import React from 'react';
import { ApolloProvider } from 'react-apollo';

createGlobalStyles();

const App: React.FunctionComponent<{}> = () => (
  <ApolloProvider client={graphqlClient}>
    <ThemeProvider>
      <ViewerProvider>
        <AppRouter />
      </ViewerProvider>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
