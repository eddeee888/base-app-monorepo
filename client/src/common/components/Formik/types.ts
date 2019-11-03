import {
  FormikErrors,
  FormikTouched,
  FieldInputProps,
  FieldMetaProps
} from 'formik';

export interface FormikBag<Values> {
  values: Values;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  getFieldProps: (nameOrOptions: any) => FieldInputProps<any>;
  getFieldMeta: (name: string) => FieldMetaProps<any>;
}
