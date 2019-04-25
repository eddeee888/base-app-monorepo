import TextField from '@material-ui/core/TextField';
import OmittedTextFieldProps from 'common/helpers/typings/OmittedTextFieldProps';
import React from 'react';

export interface SelectOption<V = string, L = string> {
  value: V | '';
  label: L | '';
}

interface Props extends OmittedTextFieldProps {
  options: SelectOption[];
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
