import { FunctionComponent, forwardRef, Ref, ReactNode } from "react";
import { Link as LinkMui, LinkProps as LinkMuiProps } from "@material-ui/core";
import LinkNext, { LinkProps as LinkNextProps } from "next/link";

export interface LinkProps extends Omit<LinkNextProps, "href"> {
  innerRef?: Ref<any>;
  children: ReactNode;
  color?: LinkMuiProps["color"];
  nextHref: LinkNextProps["href"];
}

const NextComposed = forwardRef<any, Omit<LinkProps, "innerRef">>(function NextComposed(props, ref) {
  const { as, nextHref, prefetch, ...other } = props;

  return (
    <LinkNext href={nextHref} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} />
    </LinkNext>
  );
});

const Link: FunctionComponent<LinkProps> = ({ innerRef, ...props }) => {
  return <LinkMui underline="none" color="primary" component={NextComposed} {...props} ref={innerRef} />;
};

export default forwardRef<any, LinkProps>(function LinkWithref(props, ref) {
  return <Link {...props} innerRef={ref} />;
});
