import React from 'react';
import { ApolloProvider } from 'react-apollo';
import AppRouter from 'src/AppRouter';
import ThemeProvider from 'src/common/components/ThemeProvider';
import { ViewerProvider } from 'src/common/components/ViewerContext';
import createGlobalStyles from 'src/common/helpers/createGlobalStyles';
import graphqlClient from 'src/common/helpers/graphql/client';

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
