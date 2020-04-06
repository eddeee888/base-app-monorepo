import { FormikErrors, FormikTouched, FieldInputProps, FieldMetaProps } from "formik";

export interface FormikBag<Values> {
  values: Values;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  setFieldTouched(field: keyof Values, isTouched?: boolean, shouldValidate?: boolean): void;
  setFieldValue(field: keyof Values, value: any, shouldValidate?: boolean): void;
  getFieldProps: (nameOrOptions: any) => FieldInputProps<any>;
  getFieldMeta: (name: string) => FieldMetaProps<any>;
}
