import React from 'react';
import { css } from 'emotion';
import { Link, LinkProps } from '@material-ui/core';
import { primaryFont } from '@bit/eddeee888.learnd-utils.styles';

const buttonClassName = css`
  font-family: ${primaryFont}, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
`;

export type AnchorButtonProps = LinkProps<'button'>;

const AnchorButton: React.FunctionComponent<AnchorButtonProps> = (props, ref) => (
  <Link underline="none" color="primary" component="button" classes={{ button: buttonClassName }} {...props} ref={ref} />
);

export default React.forwardRef(AnchorButton);
