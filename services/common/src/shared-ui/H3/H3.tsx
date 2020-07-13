import { Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";
import React from "react";

type H3Props = Omit<TypographyProps<"h3">, "component">;

const H3: React.FunctionComponent<H3Props> = ({ children, ...props }) => (
  <Typography gutterBottom variant="h3" {...props} component="h3">
    {children}
  </Typography>
);

export default H3;
