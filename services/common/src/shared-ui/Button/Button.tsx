import { FunctionComponent } from "react";
import { Box, CircularProgress, Button as MuiButton } from "@material-ui/core";
import { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";
import { spacingRem } from "../../shared-styles/spacings";

export interface ButtonProps extends MuiButtonProps {
  loading?: boolean;
  component?: "button" | "span";
}

const Button: FunctionComponent<ButtonProps> = ({ children, loading, component = "button", disabled, ...props }) => {
  const finalDisabled = loading || disabled;

  return (
    <MuiButton color="primary" variant="contained" component={component} fullWidth {...props} disabled={finalDisabled}>
      {children}
      {loading && (
        <>
          <Box component="span" ml={1} />
          <CircularProgress size={`${spacingRem(2)}rem`} />
        </>
      )}
    </MuiButton>
  );
};

export default Button;
