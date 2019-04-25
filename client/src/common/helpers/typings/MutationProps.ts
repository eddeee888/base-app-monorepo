import Omit from 'common/helpers/typings/Omit';
import {
  MutationProps as DefaultMutationProps,
  OperationVariables
} from 'react-apollo';

type MutationProps<D = any, V = OperationVariables> = Omit<
  DefaultMutationProps<D, V>,
  'mutation'
>;

export default MutationProps;
