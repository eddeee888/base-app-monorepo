import {
  OperationVariables,
  QueryProps as DefaultQueryProps
} from 'react-apollo';
import Omit from './Omit';

type QueryProps<D = any, V = OperationVariables> = Omit<
  DefaultQueryProps<D, V>,
  'query'
>;

export default QueryProps;
