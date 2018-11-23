import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';

interface Props extends TypographyProps {
  children: React.ReactNode;
}

const H1: React.FunctionComponent<Props> = ({ children, ...props }) => (
  <Typography gutterBottom component="h1" variant="h1" {...props}>
    {children}
  </Typography>
);

export default H1;
