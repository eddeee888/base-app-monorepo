import { useState } from 'react';
import { initialValues } from '../constants';
import {
  FormClassContactInput,
  FormClassDetailsInput,
  FormClassSessionInput,
  HostClassFormPart,
  HostClassState,
  SetFormValues
} from '../types';

interface Result {
  values: HostClassState;
  setFormValues: SetFormValues<HostClassState>;
  setSubformValues: {
    details: SetFormValues<FormClassDetailsInput>;
    contact: SetFormValues<FormClassContactInput>;
    sessions: SetFormValues<FormClassSessionInput>;
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
      details: createSetSubformValuesFn<FormClassDetailsInput>('details'),
      contact: createSetSubformValuesFn<FormClassContactInput>('contact'),
      sessions: createSetSubformValuesFn<FormClassSessionInput>('sessions')
    }
  };
};

export default useHostClassState;
