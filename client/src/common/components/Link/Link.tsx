import { AnchorProps, generateCss } from 'common/components/A';
import { cx } from 'emotion';
import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

const Link: React.FunctionComponent<LinkProps & AnchorProps> = ({
  color,
  className,
  ...props
}) => (
  <RouterLink className={cx([generateCss({ color }), className])} {...props} />
);

export default Link;
