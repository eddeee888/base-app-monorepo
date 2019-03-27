import { useState } from 'react';
import { classDetailsInitialValues } from '../constants';
import { ClassDetailsInput, UpdateState } from '../types';

interface State {
  details: {
    values: ClassDetailsInput;
    validated: boolean;
  };
}

type KeyOfState = keyof State;

interface Result {
  details: {
    values: ClassDetailsInput;
    validated: boolean;
    updateState: UpdateState<ClassDetailsInput>;
  };
}

// TOTEST
const useHostClassState = (): Result => {
  const [state, setState] = useState<State>({
    details: {
      values: classDetailsInitialValues,
      validated: false
    }
  });

  const createResultPartial = <I extends ClassDetailsInput>(
    formPart: KeyOfState
  ) => {
    const updateState: UpdateState<I> = (values, validated) => {
      setState({
        ...state,
        [formPart]: {
          values,
          validated
        }
      });
    };
    return {
      ...state[formPart],
      updateState
    };
  };

  return {
    details: createResultPartial('details')
  };
};

export default useHostClassState;
