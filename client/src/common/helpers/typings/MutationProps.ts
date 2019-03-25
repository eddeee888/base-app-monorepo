import {
  MutationProps as DefaultMutationProps,
  OperationVariables
} from 'react-apollo';
import Omit from 'src/common/helpers/typings/Omit';

type MutationProps<D = any, V = OperationVariables> = Omit<
  DefaultMutationProps<D, V>,
  'mutation'
>;

export default MutationProps;
