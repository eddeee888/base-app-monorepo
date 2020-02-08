import React from 'react';
import { Link as LinkMui, LinkProps as LinkMuiProps } from '@material-ui/core';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { css } from 'emotion';
import { primaryFont } from '@bit/eddeee888.learnd-utils.styles';

const buttonClassName = css`
  font-family: ${primaryFont}, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
`;

export interface LinkProps {
  to: RouterLinkProps['to'];
  children: RouterLinkProps['children'];
  color?: LinkMuiProps['color'];
}

export default React.forwardRef<any, LinkProps>(function Link({ to, children }, ref) {
  return (
    <LinkMui component={RouterLink} underline="none" color="primary" classes={{ button: buttonClassName }} to={to} ref={ref}>
      {children}
    </LinkMui>
  );
});
