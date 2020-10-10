import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { FormikBag } from "../types";

type FormikCheckboxProps<Values> = {
  label: string;
  name: keyof Values;
  formik: FormikBag<Values>;
  disabled?: boolean;
};

function FormikCheckbox<Values = Record<string, unknown>>({
  name,
  formik,
  label,
  disabled = false,
}: FormikCheckboxProps<Values>): React.ReactElement {
  return (
    <FormControlLabel
      disabled={disabled}
      control={<Checkbox checked={!!formik.values[name]} onChange={(event, checked) => formik.setFieldValue(name, checked)} />}
      label={label}
    />
  );
}

export default FormikCheckbox;
