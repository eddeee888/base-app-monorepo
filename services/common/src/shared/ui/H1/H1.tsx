import { FunctionComponent } from "react";
import { HeadingBase, HeadingBaseProps } from "../HeadingBase";

export type H1Props = Omit<HeadingBaseProps<"h1">, "component">;

export const H1: FunctionComponent<H1Props> = ({ children, ...props }) => (
  <HeadingBase gutterBottom variant="h1" {...props} component="h1">
    {children}
  </HeadingBase>
);
