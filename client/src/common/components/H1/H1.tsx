import { Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';

interface Props extends TypographyProps {
  children: React.ReactNode;
}

const H1: React.FunctionComponent<Props> = ({ children, ...props }) => (
  <Typography gutterBottom variant="h1" {...props} component="h1">
    {children}
  </Typography>
);

export default H1;
