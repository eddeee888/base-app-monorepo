import { Grid } from '@material-ui/core';
import Block from 'common/ui/Block';
import H1 from 'common/ui/H1';
import H2 from 'common/ui/H2';
import Logo from 'common/ui/Logo';
import Main from 'common/ui/Main';
import Paper from 'common/ui/Paper';
import { useViewer } from 'common/components/ViewerProvider';
import useUrlQuery from 'common/pathing/useUrlQuery';
import React from 'react';
import { Redirect } from 'react-router';
import SignupForm from './SignupForm';
import RouteToMe from 'routes/RouteToMe';
import RouteToHome from 'routes/RouteToHome';

const Signup: React.FunctionComponent = () => {
  const { viewer } = useViewer();
  const { redirect } = useUrlQuery();

  if (viewer) {
    return <Redirect to={redirect ? redirect : RouteToMe.generate({})} />;
  }

  return (
    <Main fullViewPortHeight>
      <Block size="sm" fullHeight marginTop={0}>
        <Paper>
          <Grid container justify="center">
            <RouteToHome.Link>
              <Logo />
            </RouteToHome.Link>
          </Grid>

          <H1 align="center" variant="h2">
            Sign up
          </H1>
          {redirect && <H2 align="center">to continue</H2>}
          <SignupForm />
        </Paper>
      </Block>
    </Main>
  );
};

export default Signup;
