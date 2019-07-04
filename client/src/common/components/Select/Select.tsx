import TextField from '@material-ui/core/TextField';
import OmittedTextFieldProps from 'common/helpers/typings/OmittedTextFieldProps';
import React from 'react';

export interface SelectOption<V = string, L = string> {
  value: V | '';
  label: L | '';
}

export interface SelectProps extends OmittedTextFieldProps {
  options: SelectOption[];
}

const Select: React.FunctionComponent<SelectProps> = ({
  options,
  ...props
}) => (
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
