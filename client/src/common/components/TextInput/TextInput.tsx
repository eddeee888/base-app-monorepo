import TextField from '@material-ui/core/TextField';
import OmittedTextFieldProps from 'common/helpers/typings/OmittedTextFieldProps';
import React from 'react';

const TextInput: React.FunctionComponent<OmittedTextFieldProps> = ({
  ...props
}) => <TextField fullWidth margin="normal" {...props} variant="outlined" />;

export default TextInput;
