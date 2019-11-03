import React from 'react';
import { FormikBag } from '../types';
import { OmittedFormikTextFieldProps } from 'common/typings/Omitted';
import prepareFieldProps from 'common/components/Formik/prepareFieldProps';
import FormError from 'common/components/FormError';
import TextInput from 'common/components/TextInput';

type FormikTextInputProps<Values> = {
  name: keyof Values;
  formik: FormikBag<Values>;
} & OmittedFormikTextFieldProps;

function FormikTextInput<Values = {}>({
  name,
  formik,
  ...rest
}: FormikTextInputProps<Values>): JSX.Element {
  const { touched, error, props } = prepareFieldProps(formik, name);
  return (
    <>
      <TextInput {...props} {...rest} error={!!error && touched} />
      {touched && <FormError error={error} />}
    </>
  );
}

export default FormikTextInput;
