import { OutlinedTextFieldProps } from "@material-ui/core/TextField";

export type OmittedTextFieldProps = Omit<Omit<Omit<Omit<OutlinedTextFieldProps, "variant">, "select">, "multiline">, "SelectProps">;

export type OmittedFormikTextFieldProps = Omit<
  Omit<Omit<Omit<Omit<Omit<OmittedTextFieldProps, "value">, "name">, "multiple">, "checked">, "onChange">,
  "onBlur"
>;
