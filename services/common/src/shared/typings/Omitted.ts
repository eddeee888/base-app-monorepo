import { OutlinedTextFieldProps } from "@material-ui/core";

export type OmittedTextFieldProps = Omit<OutlinedTextFieldProps, "variant" | "select" | "multiline" | "SelectProps">;

export type OmittedFormikTextFieldProps = Omit<OmittedTextFieldProps, "value" | "name" | "multiple" | "checked" | "onChange" | "onBlur">;
