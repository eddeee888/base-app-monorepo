import React from "react";
import { Link, LinkProps } from "@material-ui/core";

export type AnchorProps = Omit<LinkProps<"a">, "component">;

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(function InnerAnchor(props, ref) {
  return <Link underline="none" color="primary" {...props} component="a" ref={ref} />;
});

export default Anchor;
