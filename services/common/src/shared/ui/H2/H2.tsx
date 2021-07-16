import { FunctionComponent } from "react";
import { HeadingBase, HeadingBaseProps } from "../HeadingBase";

export type H2Props = Omit<HeadingBaseProps<"h2">, "component">;

export const H2: FunctionComponent<H2Props> = ({ children, ...props }) => (
  <HeadingBase gutterBottom variant="h2" {...props} component="h2">
    {children}
  </HeadingBase>
);
