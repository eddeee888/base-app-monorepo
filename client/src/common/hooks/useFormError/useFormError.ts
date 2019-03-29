import { useState } from 'react';

export interface FormErrorObject {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

type UseFormErrorFn = (numberOfErrors: number) => FormErrorObject[];

// TOTEST
const useFormError: UseFormErrorFn = numberOfErrors => {
  const result: FormErrorObject[] = [...Array(numberOfErrors)].map(() => {
    const [error, setError] = useState<string>('');

    const object: FormErrorObject = {
      error,
      setError
    };

    return object;
  });

  return result;
};

export default useFormError;
