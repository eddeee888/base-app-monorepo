import {
  Field,
  FieldProps,
  FormikErrors,
  FormikHandlers,
  FormikTouched,
  getIn
} from 'formik';
import React from 'react';
import FormError from 'src/common/components/FormError';

interface FormFieldProps<Element> {
  field: {
    onChange: FormikHandlers['handleChange'];
    onBlur: FormikHandlers['handleBlur'];
    value: any;
    name: string;
    error: boolean;
  };
  form: FieldProps<Element>['form'];
}

interface Props<Input, Element> {
  name: keyof Input;
  property: keyof Element;
  index: number;
  errors: FormikErrors<Input>;
  touched: FormikTouched<Input>;
  children: (fieldProps: FormFieldProps<Element>) => React.ReactNode;
}

function FormFieldArray<Input, Element>({
  name,
  index,
  property,
  errors,
  touched,
  children
}: Props<Input, Element>) {
  const fieldName = `${name}.${index}.${property}`;
  const fieldError = getIn(errors, fieldName);
  const fieldTouched = getIn(touched, fieldName);

  return (
    <Field name={fieldName}>
      {(fieldProps: FieldProps<Element>) => (
        <>
          {children({
            field: {
              ...fieldProps.field,
              error: !!fieldError && !!fieldTouched
            },
            form: fieldProps.form
          })}
          {fieldTouched && <FormError error={fieldError} />}
        </>
      )}
    </Field>
  );
}

export default FormFieldArray;
