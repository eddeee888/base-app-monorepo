import { Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";
import React from "react";

type H5Props = Omit<TypographyProps<"h5">, "component">;

const H5: React.FunctionComponent<H5Props> = ({ children, ...props }) => (
  <Typography gutterBottom variant="h5" {...props} component="h5">
    {children}
  </Typography>
);

export default H5;
