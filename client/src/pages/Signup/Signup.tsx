import H1 from 'common/components/H1';
import H2 from 'common/components/H2';
import Link from 'common/components/Link';
import Logo from 'common/components/Logo';
import Main from 'common/components/Main';
import Paper from 'common/components/Paper';
import ViewerContext from 'common/components/ViewerContext';
import { linkgen, Paths } from 'common/helpers/pathing';
import useUrlQuery from 'common/hooks/useUrlQuery';
import { breakpoints } from 'common/styles/media';
import { css } from 'emotion';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import SignupForm from './SignupForm';

const mainClassName = css`
  height: 100vh;
`;

const logoContainerClassName = css`
  text-align: center;
`;

const paperContainerClassName = css`
  max-width: ${breakpoints.sm}px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Signup: React.FunctionComponent = () => {
  const { viewer } = useContext(ViewerContext);
  const { redirect } = useUrlQuery();

  if (viewer) {
    return <Redirect to={redirect ? redirect : linkgen(Paths.home)} />;
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
            Sign up
          </H1>
          {redirect && <H2 align="center">to continue</H2>}
          <SignupForm />
        </Paper>
      </div>
    </Main>
  );
};

export default Signup;
