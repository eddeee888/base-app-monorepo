import { Grid } from "@material-ui/core";
import H1 from "common/shared-ui/H1";
import H2 from "common/shared-ui/H2";
import Logo from "common/shared-ui/Logo";
import Main from "common/shared-ui/Main";
import Paper from "common/shared-ui/Paper";
import { useViewer } from "common/components/ViewerProvider";
import React from "react";
import { Redirect } from "react-router";
import LoginForm from "./LoginForm";
import useUrlQuery from "common/pathing/useUrlQuery";
import generateUrlMe from "routes/me/generateUrlMe";
import LinkHome from "routes/home/LinkHome";
import MainContent from "common/shared-ui/MainContent";

const Login: React.FunctionComponent = () => {
  const { viewer } = useViewer();
  const { redirect } = useUrlQuery();

  if (viewer) {
    return <Redirect to={redirect ? redirect : generateUrlMe({})} />;
  }

  return (
    <Main fullViewPortHeight>
      <MainContent size="xs">
        <Paper>
          <Grid container justify="center">
            <LinkHome>
              <Logo />
            </LinkHome>
          </Grid>

          <H1 align="center" variant="h2">
            Log in
          </H1>
          {redirect && <H2 align="center">to continue</H2>}
          <LoginForm />
        </Paper>
      </MainContent>
    </Main>
  );
};

export default Login;
