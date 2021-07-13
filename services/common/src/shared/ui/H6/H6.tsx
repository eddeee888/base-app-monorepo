import { FunctionComponent } from "react";
import { Typography, TypographyProps } from "@material-ui/core";

type H6Props = Omit<TypographyProps<"h6">, "component">;

const H6: FunctionComponent<H6Props> = ({ children, ...props }) => (
  <Typography gutterBottom={false} variant="h6" {...props} component="h6">
    {children}
  </Typography>
);

export default H6;
