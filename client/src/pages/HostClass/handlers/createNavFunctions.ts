import * as H from 'history';
import { SetFormValues } from '../types';

export interface NavFunctions<I> {
  goNext: (values: I) => void;
  goPrevious: (values?: I) => void;
}

interface Param<I> {
  setValue: SetFormValues<I>;
  history: H.History;
  next?: string;
  previous?: string;
}

type CreateNavFunctionsFn = <I>(params: Param<I>) => NavFunctions<I>;

const createNavFunctions: CreateNavFunctionsFn = ({
  setValue,
  history,
  next,
  previous
}) => ({
  goNext: values => {
    setValue(values);
    if (next) {
      history.push(next);
    }
  },
  goPrevious: values => {
    if (values) {
      setValue(values);
    }

    if (previous) {
      history.push(previous);
    }
  }
});

export default createNavFunctions;
