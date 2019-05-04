import { RouteComponentProps } from 'react-router';
import { SetFormValues } from '../types';

export interface NavFns<I> {
  goNext: (values: I) => void;
  goPrevious: (values?: I) => void;
}

interface Param<I> {
  setValue: SetFormValues<I>;
  history: RouteComponentProps['history'];
  next?: string;
  previous?: string;
}

type CreateNavFns = <I>(params: Param<I>) => NavFns<I>;

const createNavFns: CreateNavFns = ({ setValue, history, next, previous }) => ({
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

export default createNavFns;
