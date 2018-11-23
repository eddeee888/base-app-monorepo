import { MutationProps as DefaultMutationProps } from 'react-apollo';
import Omit from 'src/common/helpers/typings/Omit';

type MutationProps<D, V> = Omit<DefaultMutationProps<D, V>, 'mutation'>;

export default MutationProps;
