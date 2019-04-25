import { AnchorProps, generateCss } from 'common/components/A';
import { cx } from 'emotion';
import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

const Link: React.FunctionComponent<LinkProps & AnchorProps> = ({
  themeColor,
  className,
  ...props
}) => (
  <RouterLink
    className={cx([generateCss({ themeColor }), className])}
    {...props}
  />
);

export default Link;
