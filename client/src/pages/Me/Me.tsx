import React from "react";
import { useViewer } from "common/components/ViewerProvider";
import { Redirect } from "react-router";
import generateUrlMe from "routes/me/generateUrlMe";
import generateUrlLogin from "routes/login/generateUrlLogin";
import Main from "common/shared-ui/Main";
import MainContent from "common/shared-ui/MainContent";
import Paper from "common/shared-ui/Paper";

const Me: React.FunctionComponent = () => {
  const { viewer } = useViewer();

  if (!viewer) {
    const redirectTo = generateUrlMe({});
    return <Redirect to={generateUrlLogin({ urlQuery: { redirect: redirectTo } })} />;
  }

  return (
    <Main>
      <MainContent size="md">
        <Paper>Welcome, {viewer.id}</Paper>
      </MainContent>
    </Main>
  );
};

export default Me;
