import { FormikBag } from "../types";
import { OmittedFormikTextFieldProps } from "../../../typings/Omitted";
import prepareFieldProps from "../prepareFieldProps";
import FormError from "../../FormError";
import { TextArea } from "../../../ui";

type FormikTextAreaProps<Values> = {
  name: keyof Values;
  formik: FormikBag<Values>;
} & OmittedFormikTextFieldProps;

function FormikTextArea<Values = Record<string, unknown>>({ name, formik, ...rest }: FormikTextAreaProps<Values>): JSX.Element {
  const { touched, error, props } = prepareFieldProps(formik, name);
  return (
    <>
      <TextArea {...props} {...rest} error={!!error && touched} />
      {touched && <FormError error={error} />}
    </>
  );
}

export default FormikTextArea;
