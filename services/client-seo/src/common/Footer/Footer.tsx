import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import { Box, Grid } from "@material-ui/core";
import { Text } from "@/shared/ui";
import { LinkSignup, LinkLogin, LinkTermAndConditions, LinkPrivacyPolicy } from "@/routes";
import { footerBackgroundColor, footerTextColor, footerLinkColorHover } from "@/shared/styles/colors";

const footerClassName = css`
  width: 100%;
  background-color: ${footerBackgroundColor};
`;

const headingClassName = css`
  color: ${footerTextColor};
`;

const anchorClassName = css`
  color: ${footerTextColor};
  transition: 0.3s;

  &:hover {
    color: ${footerLinkColorHover};
  }
`;

export const Footer: FunctionComponent = () => {
  return (
    <footer className={footerClassName}>
      <Box paddingY={8}>
        <Grid container justify="center">
          <Grid item xs={5} sm={4} md={2}>
            <Text variant="h6" className={headingClassName}>
              GET STARTED
            </Text>
            <LinkSignup>
              <Text className={anchorClassName}>Sign up</Text>
            </LinkSignup>
            <LinkLogin>
              <Text className={anchorClassName}>Log in</Text>
            </LinkLogin>
          </Grid>

          <Grid item xs={5} sm={4} md={2}>
            <Text variant="h6" className={headingClassName}>
              LEGALS
            </Text>
            <LinkTermAndConditions>
              <Text className={anchorClassName}>Terms and Conditions</Text>
            </LinkTermAndConditions>
            <LinkPrivacyPolicy>
              <Text className={anchorClassName}>Privacy</Text>
            </LinkPrivacyPolicy>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};
