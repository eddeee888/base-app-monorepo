import TextField from '@material-ui/core/TextField';
import OmittedTextFieldProps from 'common/typings/OmittedTextFieldProps';
import React from 'react';

const TextArea: React.FunctionComponent<OmittedTextFieldProps> = props => (
  <TextField
    fullWidth
    margin="normal"
    {...props}
    multiline
    variant="outlined"
  />
);

export default TextArea;
