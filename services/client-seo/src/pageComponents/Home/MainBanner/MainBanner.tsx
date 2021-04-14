import React from "react";
import { css } from "emotion";
import { Grid, Box } from "@material-ui/core";
import H1 from "~/common/shared-ui/H1";
import Block from "~/common/shared-ui/Block";
import { headerHeight } from "~/common/shared-styles/sizes";
import { primaryColor, primaryBackgroundColor } from "~/common/shared-styles/colors";

const containerClassName = css`
  height: calc(100vh - ${headerHeight});
  background-color: ${primaryColor};
  background-size: cover;
  background-attachment: scroll;
`;

const boxFullWidthClassName = css`
  width: 100%;
`;

const h1ClassName = css`
  color: ${primaryBackgroundColor};
`;

const MainBanner: React.FunctionComponent = () => {
  return (
    <Grid container className={containerClassName} alignItems="center" justify="center">
      <Block size="sm">
        <Box paddingX={2} className={boxFullWidthClassName}>
          <Grid container direction="column">
            <Grid item xs>
              <H1 className={h1ClassName} align="center">
                Welcome!
              </H1>
            </Grid>
          </Grid>
        </Box>
      </Block>
    </Grid>
  );
};

export default MainBanner;
