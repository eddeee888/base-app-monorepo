import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import Logo from "~/common/shared-ui/Logo";
import { Grid } from "@material-ui/core";
import LinkHome from "~/routes/home/LinkHome";
import { headerHeight } from "~/common/shared-styles/sizes";
import { primaryBackgroundColor, borderColor } from "~/common/shared-styles/colors";
import breakpoints from "~/common/shared-styles/breakpoints";
import ViewerMenu from "./ViewerMenu";

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

export interface HeaderProps {
  isViewerMenuHidden?: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({ isViewerMenuHidden }) => {
  return (
    <header className={headerClassName}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <LinkHome>
            <Logo className={logoClassName} />
          </LinkHome>
        </Grid>

        {!isViewerMenuHidden && <ViewerMenu />}
      </Grid>
    </header>
  );
};

export default Header;
