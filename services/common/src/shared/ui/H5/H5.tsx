import { FunctionComponent } from "react";
import { Typography, TypographyProps } from "@material-ui/core";

export type H5Props = Omit<TypographyProps<"h5">, "component">;

export const H5: FunctionComponent<H5Props> = ({ children, ...props }) => (
  <Typography gutterBottom variant="h5" {...props} component="h5">
    {children}
  </Typography>
);
