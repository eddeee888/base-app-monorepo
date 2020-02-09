import { TextField } from '@material-ui/core';
import { OmittedTextFieldProps } from 'common/typings/Omitted';
import React, { forwardRef } from 'react';

const TextInput: React.FunctionComponent<OmittedTextFieldProps> = ({ ...props }, ref) => (
  <TextField inputRef={ref} fullWidth margin="normal" {...props} variant="outlined" />
);

export default forwardRef(TextInput);
