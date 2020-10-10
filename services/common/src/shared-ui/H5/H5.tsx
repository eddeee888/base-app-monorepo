import { Typography, TypographyProps } from "@material-ui/core";
import React from "react";

type H5Props = Omit<TypographyProps<"h5">, "component">;

const H5: React.FunctionComponent<H5Props> = ({ children, ...props }) => (
  <Typography gutterBottom variant="h5" {...props} component="h5">
    {children}
  </Typography>
);

export default H5;
