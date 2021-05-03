import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import ButtonX from "~/common/components/ButtonX";
import Logo from "~/common/shared-ui/Logo";
import { useViewer } from "~/common/components/ViewerProvider";
import LoggedInMenu from "~/common/components/Header/LoggedInMenu";
import { Grid } from "@material-ui/core";
import { LinkHome } from "~/routes/home/LinkHome";
import { headerHeight } from "~/common/shared-styles/sizes";
import { primaryBackgroundColor, borderColor } from "~/common/shared-styles/colors";
import breakpoints from "~/common/shared-styles/breakpoints";
import { useLayout } from "../LayoutContext";

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

const Header: FunctionComponent = () => {
  const { viewer } = useViewer();
  const {
    header: { isVisible },
  } = useLayout();

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
                  <ButtonX to="signup" variant="outlined">
                    Sign up
                  </ButtonX>
                </Grid>
                <Grid item>
                  <ButtonX to="login" variant="outlined">
                    Log in
                  </ButtonX>
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
