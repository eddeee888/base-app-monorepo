import React, { FunctionComponent } from 'react';
import { Link as LinkMui } from '@material-ui/core';
import LinkNext, { LinkProps as LinkNextProps } from 'next/link';

export interface LinkProps extends LinkNextProps {
  innerRef?: React.Ref<any>;
  href: string;
  children: React.ReactNode;
}

const NextComposed = React.forwardRef<any, Omit<LinkProps, 'innerRef'>>(function NextComposed(props, ref) {
  const { as, href, prefetch, ...other } = props;

  return (
    <LinkNext href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} />
    </LinkNext>
  );
});

const Link: FunctionComponent<LinkProps> = ({ innerRef, ...props }) => (
  <LinkMui underline="none" color="primary" component={NextComposed} {...props} ref={innerRef} />
);

export default React.forwardRef<any, LinkProps>((props, ref) => <Link {...props} innerRef={ref} />);
