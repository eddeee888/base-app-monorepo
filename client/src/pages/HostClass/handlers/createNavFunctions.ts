import * as H from 'history';
import { SetFormPartValues } from '../types';

export interface NavFunctions<I> {
  goNext: (values: I) => void;
  goPrevious: (values: I) => void;
}

interface Param<I> {
  setFormPartialFn: SetFormPartValues<I>;
  history: H.History;
  next?: string;
  previous?: string;
}

type CreateNavFunctionsFn = <I>(params: Param<I>) => NavFunctions<I>;

const createNavFunctions: CreateNavFunctionsFn = ({
  setFormPartialFn,
  history,
  next,
  previous
}) => ({
  goNext: values => {
    setFormPartialFn(values);
    if (next) {
      history.push(next);
    }
  },
  goPrevious: values => {
    setFormPartialFn(values);
    if (previous) {
      history.push(previous);
    }
  }
});

export default createNavFunctions;
