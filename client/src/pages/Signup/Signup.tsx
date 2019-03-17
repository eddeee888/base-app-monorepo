import { css } from 'emotion';
import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import H1 from 'src/common/components/H1';
import Link from 'src/common/components/Link';
import Logo from 'src/common/components/Logo';
import Main from 'src/common/components/Main';
import Paper from 'src/common/components/Paper';
import { linkgen, Paths } from 'src/common/helpers/pathing';
import useRouteChecker from 'src/common/hooks/useRouteChecker';
import { breakpoints } from 'src/common/styles/media';
import SignupForm from './SignupForm';

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

interface Props {
  routerProps: RouteComponentProps;
}

const Signup: React.FunctionComponent<Props> = ({ routerProps }) => {
  const { viewer, queryStringOptions } = useRouteChecker({ routerProps });
  const { redirect } = queryStringOptions;

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
            Sign up {redirect ? 'to continue' : ''}
          </H1>
          <SignupForm queryStringOptions={queryStringOptions} />
        </Paper>
      </div>
    </Main>
  );
};

export default Signup;
