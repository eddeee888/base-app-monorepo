import { Grid } from '@material-ui/core';
import Block from 'common/components/Block';
import H1 from 'common/components/H1';
import H2 from 'common/components/H2';
import Link from 'common/components/Link';
import Logo from 'common/components/Logo';
import Main from 'common/components/Main';
import Paper from 'common/components/Paper';
import { useViewer } from 'common/components/ViewerContext';
import { routes, useUrlQuery } from 'common/pathing';
import React from 'react';
import { Redirect } from 'react-router';
import LoginForm from './LoginForm';

const Login: React.FunctionComponent = () => {
  const { viewer } = useViewer();
  const { redirect } = useUrlQuery();

  if (viewer) {
    return <Redirect to={redirect ? redirect : routes.me.generate({})} />;
  }

  return (
    <Main fullViewPortHeight>
      <Block size="sm" fullHeight marginTop={0}>
        <Paper>
          <Grid container justify="center">
            <Link to={routes.home.generate({})}>
              <Logo />
            </Link>
          </Grid>

          <H1 align="center" variant="h2">
            Log in
          </H1>
          {redirect && <H2 align="center">to continue</H2>}
          <LoginForm />
        </Paper>
      </Block>
    </Main>
  );
};

export default Login;
