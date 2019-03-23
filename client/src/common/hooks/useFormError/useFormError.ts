import { useState } from 'react';
import { FormErrorProps } from 'src/common/components/FormError';

export interface FormErrorObject {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  formErrorProps: FormErrorProps;
}

type UseFormErrorFn = (numberOfErrors: number) => FormErrorObject[];

const useFormError: UseFormErrorFn = numberOfErrors => {
  const result: FormErrorObject[] = [...Array(numberOfErrors)].map(() => {
    const [error, setError] = useState<string>('');

    const object: FormErrorObject = {
      error,
      setError,
      formErrorProps: {
        error,
        display: !!error
      }
    };

    return object;
  });

  return result;
};

export default useFormError;
