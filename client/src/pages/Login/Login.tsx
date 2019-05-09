import { Grid } from '@material-ui/core';
import Block from 'common/components/Block';
import H1 from 'common/components/H1';
import H2 from 'common/components/H2';
import Link from 'common/components/Link';
import Logo from 'common/components/Logo';
import Main from 'common/components/Main';
import Paper from 'common/components/Paper';
import ViewerContext from 'common/components/ViewerContext';
import { linkgen, Paths } from 'common/helpers/pathing';
import useUrlQuery from 'common/hooks/useUrlQuery';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import LoginForm from './LoginForm';

const Login: React.FunctionComponent = () => {
  const { viewer } = useContext(ViewerContext);
  const { redirect } = useUrlQuery();

  if (viewer) {
    return <Redirect to={redirect ? redirect : linkgen(Paths.dashboard)} />;
  }

  return (
    <Main fullViewPortHeight>
      <Block size="sm" fullHeight>
        <Paper>
          <Grid container justify="center">
            <Link to={linkgen(Paths.home)}>
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
