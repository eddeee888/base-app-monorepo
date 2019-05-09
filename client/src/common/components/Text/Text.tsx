import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';

interface Props extends TypographyProps {
  children: React.ReactNode;
  error?: boolean;
}

const Text: React.FunctionComponent<Props> = ({
  children,
  error,
  ...props
}) => (
  <Typography variant="body1" {...props} color={error ? 'error' : undefined}>
    {children}
  </Typography>
);

export default Text;
