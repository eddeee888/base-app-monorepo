import { FunctionComponent } from "react";
import { Typography, TypographyProps } from "@material-ui/core";

export type H4Props = Omit<TypographyProps<"h4">, "component">;

export const H4: FunctionComponent<H4Props> = ({ children, ...props }) => (
  <Typography gutterBottom variant="h4" {...props} component="h4">
    {children}
  </Typography>
);
