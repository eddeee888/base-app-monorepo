import React from 'react';
import Text from 'src/common/components/Text';

export interface FormErrorProps {
  error?: string;
  display?: boolean;
}

type CheckIfErrorFn = (error?: string, touched?: boolean) => boolean;

export const checkIfError: CheckIfErrorFn = (error, touched) => {
  if (error && touched) {
    return true;
  }
  return false;
};

const FormError: React.FunctionComponent<FormErrorProps> = ({
  error,
  display
}) => {
  if (error && display) {
    return (
      <Text error variant="body2">
        {error}
      </Text>
    );
  }

  return null;
};

export default FormError;
