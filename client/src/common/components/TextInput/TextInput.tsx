import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';

const TextInput: React.FunctionComponent<TextFieldProps> = ({ ...props }) => (
  <TextField {...props} margin="normal" variant="outlined" fullWidth />
);

export default TextInput;
