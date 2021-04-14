import { FunctionComponent, ElementType } from "react";
import { Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";

type AllowedTypographyProps = Pick<TypographyProps, "gutterBottom" | "variant" | "align" | "className" | "color">;

export interface TextProps extends AllowedTypographyProps {
  component?: ElementType;
}

const Text: FunctionComponent<TextProps> = ({ children, ...props }) => (
  <Typography variant="body1" {...props}>
    {children}
  </Typography>
);

export default Text;
