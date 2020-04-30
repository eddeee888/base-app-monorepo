import React from "react";
import { css } from "emotion";
import { Box, Grid } from "@material-ui/core";
import Text from "common/shared-ui/Text";
import LinkSignup from "routes/signup/LinkSignup";
import LinkLogin from "routes/login/LinkLogin";
import { footerBackgroundColor, textColor } from "common/shared-styles/colors";

const footerClassName = css`
  width: 100%;
  background-color: ${footerBackgroundColor};
`;

const greyTextAnchorClassName = css`
  color: ${textColor};
`;

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={footerClassName}>
      <Box paddingY={8}>
        <Grid container justify="center">
          <Grid item>
            <Text variant="h6">Get started</Text>
            <LinkSignup>
              <Text className={greyTextAnchorClassName}>Sign up</Text>
            </LinkSignup>
            <LinkLogin>
              <Text className={greyTextAnchorClassName}>Log in</Text>
            </LinkLogin>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
