import TextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import React from 'react';
import Omit from 'src/common/helpers/typings/Omit';

interface TextAreaProps
  extends Omit<Omit<OutlinedTextFieldProps, 'variant'>, 'multiline'> {}

const TextArea: React.FunctionComponent<TextAreaProps> = props => (
  <TextField fullWidth {...props} multiline variant="outlined" />
);

export default TextArea;
