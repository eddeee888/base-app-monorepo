import { Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';

type H2Props = Omit<TypographyProps<'h2'>, 'component'>;

const H2: React.FunctionComponent<H2Props> = ({ children, ...props }) => (
  <Typography gutterBottom variant="h2" {...props} component="h2">
    {children}
  </Typography>
);

export default H2;
