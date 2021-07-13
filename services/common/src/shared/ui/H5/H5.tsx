import { FunctionComponent } from "react";
import { Typography, TypographyProps } from "@material-ui/core";

type H5Props = Omit<TypographyProps<"h5">, "component">;

const H5: FunctionComponent<H5Props> = ({ children, ...props }) => (
  <Typography gutterBottom variant="h5" {...props} component="h5">
    {children}
  </Typography>
);

export default H5;
