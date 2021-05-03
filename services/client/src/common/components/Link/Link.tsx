import { forwardRef, FunctionComponent } from "react";
import { Link as LinkMui, LinkProps as LinkMuiProps } from "@material-ui/core";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

export interface LinkProps {
  href: RouterLinkProps["to"];
  children: RouterLinkProps["children"];
  color?: LinkMuiProps["color"];
  onClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AdaptorLink = forwardRef<any, RouterLinkProps>(function InnerAdaptorLink(props, ref) {
  return <RouterLink ref={ref} {...props} />;
});

const Link: FunctionComponent<LinkProps> = ({ href, children, color = "primary", onClick }) => (
  <LinkMui component={AdaptorLink} to={href} underline="none" color={color} onClick={onClick}>
    {children}
  </LinkMui>
);

export default Link;
