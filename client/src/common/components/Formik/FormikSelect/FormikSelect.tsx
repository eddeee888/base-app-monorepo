import React from 'react';
import { FormikBag } from '../types';
import { OmittedFormikSelectProps } from 'common/typings/Omitted';
import prepareFieldProps from 'common/components/Formik/prepareFieldProps';
import FormError from 'common/components/FormError';
import Select from 'common/components/Select';

type FormikSelectProps<Values> = {
  name: keyof Values;
  formik: FormikBag<Values>;
} & OmittedFormikSelectProps;

function FormikSelect<Values = {}>({
  name,
  formik,
  ...rest
}: FormikSelectProps<Values>): JSX.Element {
  const { touched, error, props } = prepareFieldProps(formik, name);
  return (
    <>
      <Select {...props} {...rest} error={!!error && touched} />
      {touched && <FormError error={error} />}
    </>
  );
}

export default FormikSelect;
