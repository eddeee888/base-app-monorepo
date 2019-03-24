import TextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import React from 'react';
import Omit from 'src/common/helpers/typings/Omit';

interface SelectOptions {
  value: string | number;
  label: string;
}

interface Props extends Omit<OutlinedTextFieldProps, 'variant'> {
  options: SelectOptions[];
}

const Select: React.FunctionComponent<Props> = ({ options, ...props }) => (
  <TextField
    fullWidth
    margin="normal"
    {...props}
    select
    variant="outlined"
    SelectProps={{ native: true }}
  >
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </TextField>
);

export default Select;
