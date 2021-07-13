import { OutlinedTextFieldProps } from "@material-ui/core/TextField";

export type OmittedTextFieldProps = Omit<OutlinedTextFieldProps, "variant" | "select" | "multiline" | "SelectProps">;

export type OmittedFormikTextFieldProps = Omit<OmittedTextFieldProps, "value" | "name" | "multiple" | "checked" | "onChange" | "onBlur">;
