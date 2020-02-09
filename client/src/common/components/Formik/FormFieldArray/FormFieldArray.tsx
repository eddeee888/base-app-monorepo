import FormError from 'common/components/FormError';
import { Field, FieldProps, FormikErrors, FormikHandlers, FormikTouched, getIn } from 'formik';
import React from 'react';

interface FormFieldProps<Element> {
  field: {
    onChange: FormikHandlers['handleChange'];
    onBlur: FormikHandlers['handleBlur'];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

function FormFieldArray<Input, Element>({ name, index, property, errors, touched, children }: Props<Input, Element>): React.ReactElement {
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
