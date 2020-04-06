import React from "react";
import { Link as LinkMui, LinkProps as LinkMuiProps } from "@material-ui/core";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

export interface LinkProps {
  to: RouterLinkProps["to"];
  children: RouterLinkProps["children"];
  color?: LinkMuiProps["color"];
}

const AdaptorLink = React.forwardRef<any, RouterLinkProps>(function InnerAdaptorLink(props, ref) {
  return <RouterLink ref={ref} {...props} />;
});

const Link: React.FunctionComponent<LinkProps> = ({ to, children, color = "primary" }) => (
  <LinkMui component={AdaptorLink} to={to} underline="none" color={color}>
    {children}
  </LinkMui>
);

export default Link;
