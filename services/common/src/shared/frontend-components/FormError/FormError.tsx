import { FunctionComponent, ReactNode } from "react";
import { Typography } from "@material-ui/core";

export interface FormErrorProps {
  error: ReactNode;
}

type CheckIfErrorFn = (error?: boolean, touched?: boolean) => boolean;

export const checkIfError: CheckIfErrorFn = (error, touched) => {
  if (error && touched) {
    return true;
  }
  return false;
};

const FormError: FunctionComponent<FormErrorProps> = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <Typography color="error" variant="body2">
      {error}
    </Typography>
  );
};

export default FormError;
