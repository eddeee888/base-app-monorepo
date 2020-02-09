import React from 'react';
import { Link, LinkProps } from '@material-ui/core';

export type AnchorProps = LinkProps<'a'>;

const Anchor: React.FunctionComponent<AnchorProps> = (props, ref) => (
  <Link underline="none" color="primary" component="a" {...props} ref={ref} />
);

export default React.forwardRef(Anchor);
