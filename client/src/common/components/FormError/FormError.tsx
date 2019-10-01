import React from 'react';
import { Typography } from '@material-ui/core';

export interface FormErrorProps {
  error: React.ReactNode;
}

type CheckIfErrorFn = (error?: boolean, touched?: boolean) => boolean;

export const checkIfError: CheckIfErrorFn = (error, touched) => {
  if (error && touched) {
    return true;
  }
  return false;
};

const FormError: React.FunctionComponent<FormErrorProps> = ({ error }) => {
  if (!!!error) {
    return null;
  }

  return (
    <Typography color="error" variant="body2">
      {error}
    </Typography>
  );
};

export default FormError;
