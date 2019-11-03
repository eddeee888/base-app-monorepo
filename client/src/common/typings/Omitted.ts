import { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import { SelectProps } from 'common/components/Select/Select';

export type OmittedTextFieldProps = Omit<
  Omit<Omit<Omit<OutlinedTextFieldProps, 'variant'>, 'select'>, 'multiline'>,
  'SelectProps'
>;

export type OmittedFormikTextFieldProps = Omit<
  Omit<
    Omit<
      Omit<Omit<Omit<OmittedTextFieldProps, 'value'>, 'name'>, 'multiple'>,
      'checked'
    >,
    'onChange'
  >,
  'onBlur'
>;

export type OmittedFormikSelectProps = Omit<
  Omit<
    Omit<Omit<Omit<Omit<SelectProps, 'value'>, 'name'>, 'multiple'>, 'checked'>,
    'onChange'
  >,
  'onBlur'
>;
