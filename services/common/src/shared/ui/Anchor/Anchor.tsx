import { forwardRef } from "react";
import { Link, LinkProps } from "@material-ui/core";

// HACK: LinkProps always have span ref for some reason. We don't care about the ref type most of the time.
export type AnchorProps = Omit<LinkProps<"a">, "component"> & { ref?: any };

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(function InnerAnchor(props, ref) {
  return <Link underline="none" color="primary" {...props} component="a" ref={ref} />;
});
