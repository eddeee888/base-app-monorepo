import { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-ui/styles";
import env from "~/env";
import createApolloClient from "~/common/shared-apollo/createApolloClient";
import { muiTheme } from "~/common/shared-styles/muiTheme";
import createGlobalStyles from "~/createGlobalStyles";
import ViewerProvider from "~/common/components/ViewerProvider";
import { LayoutProvider } from "~/common/components/LayoutContext";
import MaintenancePage from "~/common/shared-page-messages/MaintenancePage";
import imageSrc from "~/common/assets/images/maintenance.png";

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
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={muiTheme}>
        <ViewerProvider>
          <LayoutProvider>
            <BrowserRouter>
              <>{children}</>
            </BrowserRouter>
          </LayoutProvider>
        </ViewerProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default AppShell;
