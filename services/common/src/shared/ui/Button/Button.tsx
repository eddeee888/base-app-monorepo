import { FunctionComponent } from "react";
import { Box, CircularProgress, Button as MuiButton, ButtonProps as MuiButtonProps } from "@material-ui/core";
import { theme } from "../../styles/theme";

export interface ButtonProps extends MuiButtonProps {
  loading?: boolean;
  component?: "button" | "span";
}

export const Button: FunctionComponent<ButtonProps> = ({ children, loading, component = "button", disabled, ...props }) => {
  const finalDisabled = loading || disabled;

  return (
    <MuiButton color="primary" variant="contained" component={component} fullWidth {...props} disabled={finalDisabled}>
      {children}
      {loading && (
        <>
          <Box component="span" ml={1} />
          <CircularProgress size={theme.spacing(2)} />
        </>
      )}
    </MuiButton>
  );
};
