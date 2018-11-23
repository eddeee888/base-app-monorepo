import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import React from 'react';

const Button: React.FunctionComponent<ButtonProps> = props => {
  return <MuiButton color="primary" variant="contained" fullWidth {...props} />;
};

export default Button;
