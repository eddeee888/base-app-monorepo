import Typography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';

interface Props extends TypographyProps {
  children: React.ReactNode;
}

const H2: React.FunctionComponent<Props> = ({ children, ...props }) => (
  <Typography gutterBottom variant="h2" {...props} component="h2">
    {children}
  </Typography>
);

export default H2;
