import { ReactElement } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { FormikBag } from "../types";

export type FormikCheckboxProps<Values> = {
  label: string;
  name: keyof Values;
  formik: FormikBag<Values>;
  disabled?: boolean;
};

export function FormikCheckbox<Values = Record<string, unknown>>(props: FormikCheckboxProps<Values>): ReactElement {
  const { name, formik, label, disabled = false } = props;
  return (
    <FormControlLabel
      disabled={disabled}
      control={<Checkbox checked={!!formik.values[name]} onChange={(event, checked) => formik.setFieldValue(name, checked)} />}
      label={label}
    />
  );
}
