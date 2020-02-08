import { Box, CircularProgress, Button as MuiButton } from '@material-ui/core';
import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import React from 'react';
import { spacingRem } from '@bit/eddeee888.learnd-utils.styles';

interface ButtonProps extends MuiButtonProps {
  showSpinner?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({ children, showSpinner, ...props }) => {
  return (
    <MuiButton color="primary" variant="contained" fullWidth {...props}>
      {children}
      {showSpinner && (
        <>
          <Box ml={1} />
          <CircularProgress size={`${spacingRem(2)}rem`} />
        </>
      )}
    </MuiButton>
  );
};

export default Button;
