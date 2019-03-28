import { useState } from 'react';
import { initialValues } from '../constants';
import {
  ClassContactInput,
  ClassDetailsInput,
  HostClassFormPart,
  HostClassState,
  SetFormPartValues
} from '../types';

interface Result {
  values: HostClassState;
  setPartialValues: {
    details: SetFormPartValues<ClassDetailsInput>;
    contact: SetFormPartValues<ClassContactInput>;
  };
}

// TOTEST
const useHostClassState = (): Result => {
  const [values, setValues] = useState<HostClassState>(initialValues);

  function createUpdateFn<I>(
    formPart: HostClassFormPart
  ): SetFormPartValues<I> {
    return newValues => setValues({ ...values, [formPart]: newValues });
  }

  return {
    values,
    setPartialValues: {
      details: createUpdateFn<ClassDetailsInput>('details'),
      contact: createUpdateFn<ClassContactInput>('contact')
    }
  };
};

export default useHostClassState;
