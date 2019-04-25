import Text from 'common/components/Text';
import React from 'react';

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
    <Text error variant="body2">
      {error}
    </Text>
  );
};

export default FormError;
