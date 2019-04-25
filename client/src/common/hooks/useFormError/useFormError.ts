import { useState } from 'react';

export interface FormErrorObject {
  error: string;
  setError: (newValue: string) => void;
}

type UseFormErrorFn = (numberOfErrors: number) => FormErrorObject[];

const useFormError: UseFormErrorFn = numberOfErrors => {
  const defaultArray = [...Array(numberOfErrors)].map(() => '');

  const [errorArray, setErrorFn] = useState<string[]>(defaultArray);

  const result: FormErrorObject[] = errorArray.map((errorValue, index) => {
    const object: FormErrorObject = {
      error: errorArray[index],
      setError: (newValue: string) => {
        const newArray = [...errorArray];
        newArray[index] = newValue;
        setErrorFn(newArray);
      }
    };

    return object;
  });

  return result;
};

export default useFormError;
