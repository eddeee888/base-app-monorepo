import { Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";
import React from "react";

type AllowedTypographyProps = Pick<TypographyProps, "gutterBottom" | "variant" | "align" | "className">;

interface Props {
  children: React.ReactNode;
}

const Text: React.FunctionComponent<Props & AllowedTypographyProps> = ({ children, ...props }) => (
  <Typography variant="body1" {...props}>
    {children}
  </Typography>
);

export default Text;
