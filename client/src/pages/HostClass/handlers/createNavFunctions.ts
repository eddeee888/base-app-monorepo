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

function createNavFunctions<I>({
  setFormPartialFn,
  history,
  next,
  previous
}: Param<I>): NavFunctions<I> {
  return {
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
  };
}

export default createNavFunctions;
