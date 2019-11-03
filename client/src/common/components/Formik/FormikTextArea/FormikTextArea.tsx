import React from 'react';
import { FormikBag } from '../types';
import { OmittedFormikTextFieldProps } from 'common/typings/Omitted';
import prepareFieldProps from 'common/components/Formik/prepareFieldProps';
import FormError from 'common/components/FormError';
import TextArea from 'common/components/TextArea';

type FormikTextAreaProps<Values> = {
  name: keyof Values;
  formik: FormikBag<Values>;
} & OmittedFormikTextFieldProps;

function FormikTextArea<Values = {}>({
  name,
  formik,
  ...rest
}: FormikTextAreaProps<Values>): JSX.Element {
  const { touched, error, props } = prepareFieldProps(formik, name);
  return (
    <>
      <TextArea {...props} {...rest} error={!!error && touched} />
      {touched && <FormError error={error} />}
    </>
  );
}

export default FormikTextArea;
