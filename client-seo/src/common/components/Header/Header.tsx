import { css } from "emotion";
import React from "react";
import Button from "src/common/shared-ui/Button";
import Logo from "src/common/shared-ui/Logo";
import { Grid } from "@material-ui/core";
import LoggedInMenu from "src/common/components/Header/LoggedInMenu";
import LinkHome from "src/routes/home/LinkHome";
import LinkSignup from "src/routes/signup/LinkSignup";
import LinkLogin from "src/routes/login/LinkLogin";
import { headerHeight } from "src/common/shared-styles/sizes";
import { primaryBackgroundColor, borderColor } from "src/common/shared-styles/colors";
import breakpoints from "src/common/shared-styles/breakpoints";

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

  ${breakpoints.up("md")} {
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
          <LinkHome>
            <Logo className={logoClassName} />
          </LinkHome>
        </Grid>

        <Grid item>
          <Grid container alignItems="center" spacing={1}>
            {!viewer && (
              <>
                <Grid item>
                  <LinkSignup>
                    <Button variant="outlined">Sign up</Button>
                  </LinkSignup>
                </Grid>
                <Grid item>
                  <LinkLogin color="secondary">
                    <Button variant="outlined">Log in</Button>
                  </LinkLogin>
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
