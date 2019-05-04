import MuiButton, {
  ButtonProps as MuiButtonProps
} from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { spacingRem } from 'common/helpers/spacing';
import { css } from 'emotion';
import React from 'react';

const spinnerClassName = css`
  margin-left: ${spacingRem(1)}rem;
`;

interface ButtonProps extends MuiButtonProps {
  loading?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  loading,
  ...props
}) => {
  return (
    <MuiButton color="primary" variant="contained" fullWidth {...props}>
      {children}
      {loading && (
        <CircularProgress className={spinnerClassName} size="1.2em" />
      )}
    </MuiButton>
  );
};

export default Button;
