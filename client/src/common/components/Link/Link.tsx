import React from 'react';
import { Link as LinkMui, LinkProps as LinkMuiProps } from '@material-ui/core';
import { Link as LinkRouter, LinkProps as LinkRouterProps } from 'react-router-dom';
import { css } from 'emotion';
import { primaryFont } from '@bit/eddeee888.base-react-app-utils.styles';

const buttonClassName = css`
  font-family: ${primaryFont}, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
`;

export interface LinkProps {
  to: LinkRouterProps['to'];
  children: LinkRouterProps['children'];
  color?: LinkMuiProps['color'];
}

export default React.forwardRef<any, LinkProps>(function Link({ to, children, color = 'primary' }, ref) {
  return (
    <LinkMui component={LinkRouter} underline="none" color={color} classes={{ button: buttonClassName }} to={to} ref={ref}>
      {children}
    </LinkMui>
  );
});
