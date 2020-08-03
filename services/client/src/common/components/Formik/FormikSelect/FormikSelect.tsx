import React from "react";
import { FormikBag } from "../types";
import prepareFieldProps from "../prepareFieldProps";
import FormError from "common/components/FormError";
import Select, { SelectProps } from "common/shared-ui/Select";

type OmittedFormikSelectProps = Omit<
  Omit<Omit<Omit<Omit<Omit<SelectProps, "value">, "name">, "multiple">, "checked">, "onChange">,
  "onBlur"
>;

type FormikSelectProps<Values> = {
  name: keyof Values;
  formik: FormikBag<Values>;
} & OmittedFormikSelectProps;

function FormikSelect<Values = {}>({ name, formik, ...rest }: FormikSelectProps<Values>): JSX.Element {
  const { touched, error, props } = prepareFieldProps(formik, name);
  return (
    <>
      <Select {...props} {...rest} error={!!error && touched} />
      {touched && <FormError error={error} />}
    </>
  );
}

export default FormikSelect;
