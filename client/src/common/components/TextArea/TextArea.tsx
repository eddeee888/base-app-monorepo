import TextField from '@material-ui/core/TextField';
import React from 'react';
import OmittedTextFieldProps from 'src/common/helpers/typings/OmittedTextFieldProps';

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
