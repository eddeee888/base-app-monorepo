import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import { ButtonX } from "../ButtonX";
import { Logo } from "@/shared/ui";
import { useViewer } from "../ViewerProvider";
import { LoggedInMenu } from "./LoggedInMenu";
import { Grid } from "@material-ui/core";
import { LinkHome } from "@/routes";
import { headerHeight } from "@/shared/styles/sizes";
import { primaryBackgroundColor, borderColor } from "@/shared/styles/colors";
import { theme } from "@/shared/styles/theme";
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
  ${theme.breakpoints.up("md")} {
    padding: 0 2rem;
  }
`;

const logoClassName = css`
  display: block;
`;

export const Header: FunctionComponent = () => {
  const { viewer } = useViewer();
  const {
    header: { isVisible },
  } = useLayout();

  if (!isVisible) {
    return null;
  }

  return (
    <header className={headerClassName}>
      <Grid container justifyContent="space-between" alignItems="center">
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
                  <ButtonX route={{ to: "signup" }} variant="outlined">
                    Sign up
                  </ButtonX>
                </Grid>
                <Grid item>
                  <ButtonX route={{ to: "login" }} variant="outlined">
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
