import { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-ui/styles";
import env from "@/env";
import { createApolloClient } from "@/shared/apollo";
import { theme } from "@/shared/styles/theme";
import { createGlobalStyles } from "./createGlobalStyles";
import { ViewerProvider, LayoutProvider } from "@/common";
import { MaintenancePage } from "@/shared/page-messages";
import imageSrc from "@/assets/images/maintenance.png";

createGlobalStyles();

const apolloClient = createApolloClient({
  uri: env.graphqlEndpoint,
  webSocketUri: env.websocketGraphqlEndpoint,
});

const AppShell: FunctionComponent = ({ children }) => {
  if (env.specialMode === "maintenance") {
    return <MaintenancePage appName={env.appName} imageSrc={imageSrc} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <ViewerProvider>
          <LayoutProvider>
            <BrowserRouter>
              <>{children}</>
            </BrowserRouter>
          </LayoutProvider>
        </ViewerProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default AppShell;
