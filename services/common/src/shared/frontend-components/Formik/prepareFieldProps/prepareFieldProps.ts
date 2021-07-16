import { FormikBag } from "../types";
import { FieldInputProps, FieldHelperProps } from "formik";

interface Result {
  props: FieldInputProps<any>;
  helpers: FieldHelperProps<any>;
  error?: string;
  touched: boolean;
}

const prepareFieldProps = <Values = Record<string, unknown>>(formik: FormikBag<Values>, fieldName: keyof Values): Result => {
  const meta = formik.getFieldMeta(fieldName as string);
  return {
    props: formik.getFieldProps(fieldName),
    helpers: formik.getFieldHelpers(fieldName),
    error: meta.error,
    touched: meta.touched,
  };
};

export default prepareFieldProps;
