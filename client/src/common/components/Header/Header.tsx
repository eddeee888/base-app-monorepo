import { css } from "emotion";
import React from "react";
import Button from "common/shared-ui/Button";
import Logo from "common/shared-ui/Logo";
import { useViewer } from "common/components/ViewerProvider";
import LoggedInMenu from "common/components/Header/LoggedInMenu";
import { Grid } from "@material-ui/core";
import LinkHome from "routes/home/LinkHome";
import LinkSignup from "routes/signup/LinkSignup";
import LinkLogin from "routes/login/LinkLogin";
import { headerHeight } from "common/shared-styles/sizes";
import { primaryBackgroundColor, borderColor } from "common/shared-styles/colors";
import breakpoints from "common/shared-styles/breakpoints";
import { useHeader } from "common/components/HeaderProvider";

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

const Header: React.FunctionComponent<{}> = () => {
  const { viewer } = useViewer();
  const { isVisible } = useHeader();

  if (!isVisible) {
    return null;
  }

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
