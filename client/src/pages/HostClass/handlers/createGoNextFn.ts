import * as H from 'history';
import { SetFormPartValues } from '../types';

export type GoNextFn<I> = (values: I) => void;

interface Param<I> {
  setFormPartialFn: SetFormPartValues<I>;
  history: H.History;
  next?: string;
}

function createGoNextFn<I>({
  setFormPartialFn,
  history,
  next
}: Param<I>): GoNextFn<I> {
  return values => {
    setFormPartialFn(values);
    if (next) {
      history.push(next);
    }
  };
}

export default createGoNextFn;
