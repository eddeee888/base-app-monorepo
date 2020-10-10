import React from "react";
import HeadingBase, { HeadingBaseProps } from "../HeadingBase";

export type H2Props = Omit<HeadingBaseProps<"h2">, "component">;

const H2: React.FunctionComponent<H2Props> = ({ children, ...props }) => (
  <HeadingBase gutterBottom variant="h2" {...props} component="h2">
    {children}
  </HeadingBase>
);

export default H2;
