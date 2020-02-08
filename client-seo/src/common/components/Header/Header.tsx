import { css } from 'emotion';
import React from 'react';
import Button from 'src/common/ui/Button';
import Logo from 'src/common/ui/Logo';
import { headerHeight, mediaQuery, borderColor, primaryBackgroundColor } from '@bit/eddeee888.learnd-utils.styles';
import routes from 'src/common/pathing/routes';
import { Grid } from '@material-ui/core';
import LoggedInMenu from 'src/common/components/Header/LoggedInMenu';

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

export interface Viewer {
  id: string;
  avatar?: string | null;
  firstName: string;
}

export interface HeaderProps {
  viewer: Viewer | null;
}

const Header: React.FunctionComponent<HeaderProps> = ({ viewer }) => {
  return (
    <header className={headerClassName}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <routes.home.Link params={{}}>
            <Logo className={logoClassName} />
          </routes.home.Link>
        </Grid>

        <Grid item>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <routes.hostClassCreate.Link params={{}}>
                <Button variant="outlined">Host a class</Button>
              </routes.hostClassCreate.Link>
            </Grid>

            {!viewer && (
              <>
                <Grid item>
                  <routes.signup.Link params={{}}>
                    <Button variant="outlined">Sign up</Button>
                  </routes.signup.Link>
                </Grid>
                <Grid item>
                  <routes.login.Link params={{}} color="secondary">
                    <Button variant="outlined">Log in</Button>
                  </routes.login.Link>
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
