import { FormikBag } from 'common/components/Formik/types';
import { FieldInputProps } from 'formik';

interface Result<Values> {
  props: FieldInputProps<Values>;
  error?: string;
  touched: boolean;
}

const prepareFieldProps = <Values = {}>(
  formik: FormikBag<Values>,
  fieldName: keyof Values
): Result<Values> => {
  const meta = formik.getFieldMeta(fieldName as string);
  return {
    props: formik.getFieldProps(fieldName),
    error: meta.error,
    touched: meta.touched
  };
};

export default prepareFieldProps;
