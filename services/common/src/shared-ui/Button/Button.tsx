import { FunctionComponent } from "react";
import { Box, CircularProgress, Button as MuiButton } from "@material-ui/core";
import { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";
import { spacingRem } from "../../shared-styles/spacings";

export interface ButtonProps extends MuiButtonProps {
  showSpinner?: boolean;
  component?: "button" | "span";
}

const Button: FunctionComponent<ButtonProps> = ({ children, showSpinner, component = "button", ...props }) => {
  return (
    <MuiButton color="primary" variant="contained" component={component} fullWidth {...props}>
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
