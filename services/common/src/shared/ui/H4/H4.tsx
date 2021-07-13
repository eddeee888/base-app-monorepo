import { FunctionComponent } from "react";
import { Typography, TypographyProps } from "@material-ui/core";

type H4Props = Omit<TypographyProps<"h4">, "component">;

const H4: FunctionComponent<H4Props> = ({ children, ...props }) => (
  <Typography gutterBottom variant="h4" {...props} component="h4">
    {children}
  </Typography>
);

export default H4;
