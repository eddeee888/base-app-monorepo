import { Grid } from "@material-ui/core";
import H1 from "common/shared-ui/H1";
import H2 from "common/shared-ui/H2";
import Logo from "common/shared-ui/Logo";
import Main from "common/shared-ui/Main";
import Paper from "common/shared-ui/Paper";
import { useViewer } from "common/components/ViewerProvider";
import React from "react";
import SignupForm from "./SignupForm";
import useUrlQuery from "common/pathing/useUrlQuery";
import generateUrlMe from "routes/me/generateUrlMe";
import LinkHome from "routes/home/LinkHome";
import MainContent from "common/shared-ui/MainContent";
import RedirectServerSide from "route-codegen/RedirectServerSide";
import Spinner from "common/shared-ui/Spinner";

const Signup: React.FunctionComponent = () => {
  const { viewer } = useViewer();
  const { redirect } = useUrlQuery();

  if (viewer) {
    return <RedirectServerSide href={redirect ? redirect : generateUrlMe({})} fallback={<Spinner size="fullPage" />} />;
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
            Sign up
          </H1>
          {redirect && <H2 align="center">to continue</H2>}
          <SignupForm />
        </Paper>
      </MainContent>
    </Main>
  );
};

export default Signup;
