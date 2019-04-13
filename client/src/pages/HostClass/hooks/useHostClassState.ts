import { useState } from 'react';
import { initialValues } from '../constants';
import {
  ClassContactInput,
  ClassDetailsInput,
  ClassSessionsInput,
  HostClassFormPart,
  HostClassState,
  SetFormValues
} from '../types';

interface Result {
  values: HostClassState;
  setFormValues: SetFormValues<HostClassState>;
  setSubformValues: {
    details: SetFormValues<ClassDetailsInput>;
    contact: SetFormValues<ClassContactInput>;
    sessions: SetFormValues<ClassSessionsInput>;
  };
}

type CreateSetSubformValuesFn = <I>(
  subForm: HostClassFormPart
) => SetFormValues<I>;

const useHostClassState = (): Result => {
  const [values, setValues] = useState<HostClassState>(initialValues);

  const createSetSubformValuesFn: CreateSetSubformValuesFn = subForm => newValues =>
    setValues({ ...values, [subForm]: newValues });

  return {
    values,
    setFormValues: formValues => setValues({ ...formValues }),
    setSubformValues: {
      details: createSetSubformValuesFn<ClassDetailsInput>('details'),
      contact: createSetSubformValuesFn<ClassContactInput>('contact'),
      sessions: createSetSubformValuesFn<ClassSessionsInput>('sessions')
    }
  };
};

export default useHostClassState;
