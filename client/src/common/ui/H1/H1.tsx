import { Typography, TypographyProps } from '@material-ui/core';
import React from 'react';

type H1Props = Omit<TypographyProps<'h1'>, 'component'>;

const H1: React.FunctionComponent<H1Props> = ({ children, ...props }) => (
  <Typography gutterBottom variant="h1" {...props} component="h1">
    {children}
  </Typography>
);

export default H1;
