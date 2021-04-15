import { FormikBag } from "../types";
import { OmittedFormikTextFieldProps } from "../../../shared-typings/Omitted";
import prepareFieldProps from "../prepareFieldProps";
import FormError from "../../FormError";
import TextInput from "../../../shared-ui/TextInput";

type FormikTextInputProps<Values> = {
  name: keyof Values;
  formik: FormikBag<Values>;
} & OmittedFormikTextFieldProps;

function FormikTextInput<Values = Record<string, unknown>>({ error, name, formik, ...rest }: FormikTextInputProps<Values>): JSX.Element {
  const { touched, error: fieldError, props } = prepareFieldProps(formik, name);
  const finalError = !!fieldError || !!error;

  return (
    <>
      <TextInput {...props} {...rest} error={finalError && touched} />
      {touched && <FormError error={fieldError} />}
    </>
  );
}

export default FormikTextInput;
