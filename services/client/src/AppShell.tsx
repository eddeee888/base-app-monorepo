import React from "react";
import ApolloProvider from "common/components/ApolloProvider";
import ViewerProvider from "common/components/ViewerProvider";
import BrowserRouter from "common/components/BrowserRouter";
import ThemeProvider from "common/components/ThemeProvider";
import HeaderProvider from "common/components/HeaderProvider";
import createGlobalStyles from "./createGlobalStyles";
import env from "env";
import imageSrc from "common/assets/images/maintenance.png";
import MaintenancePage from "common/shared-page-messages/MaintenancePage";

createGlobalStyles();

const AppShell: React.FunctionComponent = ({ children }) => {
  if (env.specialMode === "maintenance") {
    return <MaintenancePage appName={env.appName} imageSrc={imageSrc} />;
  }

  return (
    <ApolloProvider>
      <ThemeProvider>
        <ViewerProvider>
          <HeaderProvider>
            <BrowserRouter>
              <>{children}</>
            </BrowserRouter>
          </HeaderProvider>
        </ViewerProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default AppShell;
