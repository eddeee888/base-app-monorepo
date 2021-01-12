import React from "react";
import { useViewer } from "common/components/ViewerProvider";
import generateUrlMe from "routes/me/generateUrlMe";
import Main from "common/shared-ui/Main";
import MainContent from "common/shared-ui/MainContent";
import Paper from "common/shared-ui/Paper";
import RedirectLogin from "routes/login/RedirectLogin";

const Me: React.FunctionComponent = () => {
  const { viewer } = useViewer();

  if (!viewer) {
    const redirectTo = generateUrlMe({});
    return <RedirectLogin query={{ redirect: redirectTo }} />;
  }

  return (
    <Main>
      <MainContent size="md">
        <Paper>Welcome, {viewer.displayName}</Paper>
      </MainContent>
    </Main>
  );
};

export default Me;
