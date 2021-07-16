import { FunctionComponent, ElementType } from "react";
import { Typography, TypographyProps } from "@material-ui/core";

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
