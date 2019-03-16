import { css } from 'emotion';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import H1 from 'src/common/components/H1';
import Link from 'src/common/components/Link';
import Logo from 'src/common/components/Logo';
import Main from 'src/common/components/Main';
import Paper from 'src/common/components/Paper';
import ViewerContext from 'src/common/components/ViewerContext';
import { linkgen, Paths } from 'src/common/helpers/pathing';
import { breakpoints } from 'src/common/styles/media';
import LoginForm from './LoginForm';

const mainClassName = css`
  height: 100vh;
`;

const logoContainerClassName = css`
  text-align: center;
`;

const paperContainerClassName = css`
  max-width: ${breakpoints.small}px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login: React.FunctionComponent = () => {
  const { viewer } = useContext(ViewerContext);

  if (viewer) {
    return <Redirect to={linkgen(Paths.dashboard)} />;
  }

  return (
    <Main className={mainClassName}>
      <div className={paperContainerClassName}>
        <Paper>
          <div className={logoContainerClassName}>
            <Link to={linkgen(Paths.home)}>
              <Logo />
            </Link>
          </div>
          <H1 align="center" variant="h2">
            Login
          </H1>
          <LoginForm />
        </Paper>
      </div>
    </Main>
  );
};

export default Login;
