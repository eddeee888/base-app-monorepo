import TextField from '@material-ui/core/TextField';
import React from 'react';
import OmittedTextFieldProps from 'src/common/helpers/typings/OmittedTextFieldProps';

const TextInput: React.FunctionComponent<OmittedTextFieldProps> = ({
  ...props
}) => <TextField fullWidth margin="normal" {...props} variant="outlined" />;

export default TextInput;
