import React from "react";
import ApolloProvider from "common/components/ApolloProvider";
import ViewerProvider from "common/components/ViewerProvider";
import BrowserRouter from "common/components/BrowserRouter";
import ThemeProvider from "common/components/ThemeProvider";
import HeaderProvider from "common/components/HeaderProvider";
import createGlobalStyles from "./createGlobalStyles";

createGlobalStyles();

const AppShell: React.FunctionComponent<{}> = ({ children }) => (
  <ApolloProvider>
    <ThemeProvider>
      <ViewerProvider>
        <HeaderProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </HeaderProvider>
      </ViewerProvider>
    </ThemeProvider>
  </ApolloProvider>
);

export default AppShell;
