import { AnchorProps, generateCss } from 'common/components/A';
import { cx } from 'emotion';
import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from 'react-router-dom';

export type LinkProps = RouterLinkProps & AnchorProps;

const Link: React.FunctionComponent<LinkProps> = ({
  color,
  className,
  ...props
}) => (
  <RouterLink className={cx([generateCss({ color }), className])} {...props} />
);

export default Link;
