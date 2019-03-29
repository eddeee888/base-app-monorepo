import {
  Field,
  FieldProps,
  FormikErrors,
  FormikHandlers,
  FormikTouched
} from 'formik';
import React from 'react';
import FormError from '../FormError';

interface FormFieldProps<V> {
  field: {
    onChange: FormikHandlers['handleChange'];
    onBlur: FormikHandlers['handleBlur'];
    value: any;
    name: string;
    error: boolean;
  };
  form: FieldProps<V>['form'];
}

interface Props<V> {
  name: keyof V;
  children: (fieldProps: FormFieldProps<V>) => React.ReactNode;
  errors: FormikErrors<V>;
  touched: FormikTouched<V>;
}

function FormField<V>({ name, children, errors, touched }: Props<V>) {
  return (
    <Field name={name}>
      {(fieldProps: FieldProps<V>) => (
        <>
          {children({
            field: {
              ...fieldProps.field,
              error: !!errors[name] && !!touched[name]
            },
            form: fieldProps.form
          })}
          {!!touched[name] && <FormError error={errors[name]} />}
        </>
      )}
    </Field>
  );
}

export default FormField;
