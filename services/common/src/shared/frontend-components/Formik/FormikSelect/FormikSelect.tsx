import { FormikBag } from "../types";
import prepareFieldProps from "../prepareFieldProps";
import FormError from "../../FormError";
import Select, { SelectProps } from "../../../ui/Select";

type OmittedFormikSelectProps = Omit<
  Omit<Omit<Omit<Omit<Omit<SelectProps, "value">, "name">, "multiple">, "checked">, "onChange">,
  "onBlur"
>;

type FormikSelectProps<Values> = {
  name: keyof Values;
  formik: FormikBag<Values>;
} & OmittedFormikSelectProps;

function FormikSelect<Values = Record<string, unknown>>({ name, formik, ...rest }: FormikSelectProps<Values>): JSX.Element {
  const { touched, error, props } = prepareFieldProps(formik, name);
  return (
    <>
      <Select {...props} {...rest} error={!!error && touched} />
      {touched && <FormError error={error} />}
    </>
  );
}

export default FormikSelect;
