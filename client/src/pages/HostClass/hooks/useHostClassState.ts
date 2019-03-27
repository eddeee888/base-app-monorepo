import { useState } from 'react';
import { initialValues } from '../constants';
import { ClassContactInput, ClassDetailsInput, UpdateState } from '../types';

interface State {
  details: {
    values: ClassDetailsInput;
    isValidated: boolean;
  };
  contact: {
    values: ClassContactInput;
    isValidated: boolean;
  };
}

type KeyOfState = keyof State;

interface Result {
  details: {
    values: ClassDetailsInput;
    isValidated: boolean;
    updateState: UpdateState<ClassDetailsInput>;
  };
  contact: {
    values: ClassContactInput;
    isValidated: boolean;
    updateState: UpdateState<ClassContactInput>;
  };
}

// TOTEST
const useHostClassState = (): Result => {
  const [state, setState] = useState<State>({
    details: {
      values: initialValues.details,
      isValidated: false
    },
    contact: {
      values: initialValues.contact,
      isValidated: false
    }
  });

  const createResultPartial = <I>(
    formPart: KeyOfState
  ): {
    values: I;
    isValidated: boolean;
    updateState: UpdateState<I>;
  } => {
    const updateState: UpdateState<I> = (values: I, isValidated) => {
      setState({
        ...state,
        [formPart]: {
          values,
          isValidated
        }
      });
    };

    // TOFIX
    return {
      ...state[formPart],
      updateState
    };
  };

  return {
    details: createResultPartial<ClassDetailsInput>('details'),
    contact: createResultPartial<ClassContactInput>('contact')
  };
};

export default useHostClassState;
