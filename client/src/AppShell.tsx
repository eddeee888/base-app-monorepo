import createGlobalStyles from 'common/helpers/createGlobalStyles';
import React from 'react';
import ApolloProvider from 'common/components/ApolloProvider';
import ViewerProvider from 'common/components/ViewerProvider';
import BrowserRouter from 'common/components/BrowserRouter';
import Header from 'common/components/Header';
import ThemeProvider from 'common/components/ThemeProvider';

createGlobalStyles();

const AppShell: React.FunctionComponent<{}> = ({ children }) => (
  <ApolloProvider>
    <ThemeProvider>
      <ViewerProvider>
        <BrowserRouter>
          <Header />
          {children}
        </BrowserRouter>
      </ViewerProvider>
    </ThemeProvider>
  </ApolloProvider>
);

export default AppShell;
