import { TextField } from "@material-ui/core";
import { OmittedTextFieldProps } from "../../shared-typings/Omitted";
import React, { forwardRef } from "react";

export type TextInputProps = OmittedTextFieldProps;

const TextInput = forwardRef<any, TextInputProps>(function InnerTextInput(props, ref) {
  return <TextField inputRef={ref} fullWidth margin="normal" {...props} variant="outlined" />;
});

export default TextInput;
