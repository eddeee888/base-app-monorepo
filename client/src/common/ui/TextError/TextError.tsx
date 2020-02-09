import React from 'react';
import { css } from 'emotion';
import { Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import { Error } from '@material-ui/icons';
import { spacingPx, textErrorColor } from '@bit/eddeee888.base-react-app-utils.styles';

interface Props extends TypographyProps {
  children: React.ReactNode;
}

const errorClassName = css`
  color: ${textErrorColor};
  display: flex;
`;

const iconClassName = css`
  margin-right: ${spacingPx(1) / 2}px;
`;

const TextError: React.FunctionComponent<Props> = ({ children, ...props }) => (
  <Typography {...props} variant="body1" className={errorClassName}>
    <Error className={iconClassName} />
    <span>{children}</span>
  </Typography>
);

export default TextError;
