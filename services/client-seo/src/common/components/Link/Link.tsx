import { FunctionComponent, forwardRef, Ref, ReactNode } from "react";
import { Link as LinkMui, LinkProps as LinkMuiProps } from "@material-ui/core";
import LinkNext, { LinkProps as LinkNextProps } from "next/link";

export interface LinkProps extends LinkNextProps {
  innerRef?: Ref<HTMLAnchorElement>;
  children: ReactNode;
  color?: LinkMuiProps["color"];
}

const NextComposed = forwardRef<HTMLAnchorElement, Omit<LinkProps, "innerRef">>(function NextComposed(props, ref) {
  const { as, href, prefetch, ...other } = props;

  return (
    <LinkNext href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} />
    </LinkNext>
  );
});

const Link: FunctionComponent<LinkProps> = ({ href, innerRef, ...props }) => {
  return <LinkMui underline="none" color="primary" href={href as string} component={NextComposed} {...props} ref={innerRef} />;
};

export default forwardRef<HTMLAnchorElement, LinkProps>(function LinkWithref(props, ref) {
  return <Link {...props} innerRef={ref} />;
});
