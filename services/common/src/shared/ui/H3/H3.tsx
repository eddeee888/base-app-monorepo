import { FunctionComponent } from "react";
import { Typography, TypographyProps } from "@material-ui/core";

export type H3Props = Omit<TypographyProps<"h3">, "component">;

export const H3: FunctionComponent<H3Props> = ({ children, ...props }) => (
  <Typography gutterBottom variant="h3" {...props} component="h3">
    {children}
  </Typography>
);
