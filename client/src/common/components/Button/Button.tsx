import Box from '@material-ui/core/Box';
import MuiButton, {
  ButtonProps as MuiButtonProps
} from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { spacingRem } from 'common/styles/spacing';
import React from 'react';

interface ButtonProps extends MuiButtonProps {
  showSpinner?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  showSpinner,
  ...props
}) => {
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
