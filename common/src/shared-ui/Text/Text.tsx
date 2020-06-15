import { Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";
import React from "react";

type AllowedTypographyProps = Pick<TypographyProps, "gutterBottom" | "variant" | "align" | "className" | "color">;

export interface TextProps extends AllowedTypographyProps {
  component?: React.ElementType;
}

const Text: React.FunctionComponent<TextProps> = ({ children, ...props }) => (
  <Typography variant="body1" {...props}>
    {children}
  </Typography>
);

export default Text;
