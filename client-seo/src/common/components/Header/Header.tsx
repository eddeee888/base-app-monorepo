import { css } from 'emotion';
import React from 'react';
import Button from 'src/common/ui/Button';
import Logo from 'src/common/ui/Logo';
import { headerHeight, mediaQuery, borderColor, primaryBackgroundColor } from '@bit/eddeee888.base-react-app-utils.styles';
import { Grid } from '@material-ui/core';
import RouteToHome from 'src/routes/RouteToHome';
import RouteToSignup from 'src/routes/RouteToSignup';
import RouteToLogin from 'src/routes/RouteToLogin';

const headerClassName = css`
  width: 100%;
  padding: 0 1rem;
  position: fixed;
  top: 0px;
  height: ${headerHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${primaryBackgroundColor};
  border-bottom: 1px solid ${borderColor};
  z-index: 1201;

  ${mediaQuery.md} {
    padding: 0 2rem;
  }
`;

const logoClassName = css`
  display: block;
`;

const Header: React.FunctionComponent = () => {
  return (
    <header className={headerClassName}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <RouteToHome.Link params={{}}>
            <a>
              <Logo className={logoClassName} />
            </a>
          </RouteToHome.Link>
        </Grid>

        <Grid item>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <RouteToSignup.Link params={{}}>
                <Button variant="outlined">Sign up</Button>
              </RouteToSignup.Link>
            </Grid>
            <Grid item>
              <RouteToLogin.Link params={{}}>
                <Button variant="outlined">Log in</Button>
              </RouteToLogin.Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
