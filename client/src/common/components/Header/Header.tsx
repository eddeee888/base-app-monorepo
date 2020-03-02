import { css } from 'emotion';
import React from 'react';
import Button from 'common/ui/Button';
import Logo from 'common/ui/Logo';
import { useViewer } from 'common/components/ViewerProvider';
import { headerHeight, mediaQuery, borderColor, primaryBackgroundColor } from '@bit/eddeee888.base-react-app-utils.styles';
import LoggedInMenu from 'common/components/Header/LoggedInMenu';
import { Grid } from '@material-ui/core';
import RouteToHome from 'routes/RouteToHome';
import RouteToSignup from 'routes/RouteToSignup';
import RouteToLogin from 'routes/RouteToLogin';

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

const Header: React.FunctionComponent<{}> = () => {
  const { viewer } = useViewer();
  return (
    <header className={headerClassName}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <RouteToHome.Link>
            <Logo className={logoClassName} />
          </RouteToHome.Link>
        </Grid>

        <Grid item>
          <Grid container alignItems="center" spacing={1}>
            {!viewer && (
              <>
                <Grid item>
                  <RouteToSignup.Link>
                    <Button variant="outlined">Sign up</Button>
                  </RouteToSignup.Link>
                </Grid>
                <Grid item>
                  <RouteToLogin.Link color="secondary">
                    <Button variant="outlined">Log in</Button>
                  </RouteToLogin.Link>
                </Grid>
              </>
            )}
            {viewer && (
              <Grid item>
                <LoggedInMenu viewer={viewer} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
