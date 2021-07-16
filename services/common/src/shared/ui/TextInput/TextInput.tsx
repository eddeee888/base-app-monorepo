import { TextField } from "@material-ui/core";
import { OmittedTextFieldProps } from "../../typings/Omitted";
import { forwardRef } from "react";

export type TextInputProps = OmittedTextFieldProps;

export const TextInput = forwardRef<any, TextInputProps>(function InnerTextInput(props, ref) {
  return <TextField inputRef={ref} fullWidth margin="normal" {...props} variant="outlined" />;
});
