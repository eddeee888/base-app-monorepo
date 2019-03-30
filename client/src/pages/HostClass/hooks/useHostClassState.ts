import { useState } from 'react';
import { initialValues } from '../constants';
import {
  ClassContactInput,
  ClassDetailsInput,
  ClassSessionsInput,
  HostClassFormPart,
  HostClassState,
  SetFormPartValues
} from '../types';

interface Result {
  values: HostClassState;
  setPartialValues: {
    details: SetFormPartValues<ClassDetailsInput>;
    contact: SetFormPartValues<ClassContactInput>;
    sessions: SetFormPartValues<ClassSessionsInput>;
  };
}

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
      contact: createUpdateFn<ClassContactInput>('contact'),
      sessions: createUpdateFn<ClassSessionsInput>('sessions')
    }
  };
};

export default useHostClassState;
