import MenuItem from '@material-ui/core/MenuItem';
import TextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import React from 'react';
import Omit from 'src/common/helpers/typings/Omit';

// TODO: add test

interface SelectOptions {
  value: string | number;
  label: string;
}

interface Props extends Omit<OutlinedTextFieldProps, 'variant'> {
  options: SelectOptions[];
}

const Select: React.FunctionComponent<Props> = ({ options, ...props }) => {
  return (
    <TextField fullWidth margin="normal" {...props} select variant="outlined">
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Select;
