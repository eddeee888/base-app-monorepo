import { css } from 'emotion';
import React from 'react';
import Button from 'common/ui/Button';
import Logo from 'common/ui/Logo';
import { useViewer } from 'common/components/ViewerProvider';
import { headerHeight, mediaQuery, borderColor, primaryBackgroundColor } from '@bit/eddeee888.learnd-utils.styles';
import { routes } from 'common/pathing';
import LoggedInMenu from 'common/components/Header/LoggedInMenu';
import { Grid } from '@material-ui/core';

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
          <routes.home.Link params={{}}>
            <Logo className={logoClassName} />
          </routes.home.Link>
        </Grid>

        <Grid item>
          <Grid container alignItems="center" spacing={1}>
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
