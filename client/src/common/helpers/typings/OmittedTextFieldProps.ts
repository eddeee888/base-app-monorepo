import { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import Omit from './Omit';

type OmittedTextFieldProps = Omit<
  Omit<Omit<Omit<OutlinedTextFieldProps, 'variant'>, 'select'>, 'multiline'>,
  'SelectProps'
>;

export default OmittedTextFieldProps;
