import { FunctionComponent } from "react";
import { Typography, TypographyProps } from "@material-ui/core";

type H3Props = Omit<TypographyProps<"h3">, "component">;

const H3: FunctionComponent<H3Props> = ({ children, ...props }) => (
  <Typography gutterBottom variant="h3" {...props} component="h3">
    {children}
  </Typography>
);

export default H3;
