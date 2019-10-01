import Typography, { TypographyProps } from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import React from 'react';
import { css } from 'emotion';
import { textSuccessColor } from 'common/styles/color';
import { spacingPx } from 'common/styles/spacing';

interface Props extends TypographyProps {
  children: React.ReactNode;
}

const successClassName = css`
  color: ${textSuccessColor};
  display: flex;
`;

const successIconClassName = css`
  margin-right: ${spacingPx(1) / 2}px;
`;

const TextSuccess: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => (
  <Typography {...props} variant="body1" className={successClassName}>
    <CheckCircleIcon className={successIconClassName} />
    <span>{children}</span>
  </Typography>
);

export default TextSuccess;
