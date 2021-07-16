import { FormikErrors, FormikTouched, FieldInputProps, FieldMetaProps, FieldHelperProps } from "formik";

export interface FormikBag<Values> {
  values: Values;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  setFieldTouched(field: keyof Values, isTouched?: boolean, shouldValidate?: boolean): void;
  setFieldValue(field: keyof Values, value: any, shouldValidate?: boolean): void;
  getFieldProps: (nameOrOptions: any) => FieldInputProps<any>;
  getFieldHelpers: (name: any) => FieldHelperProps<any>;
  getFieldMeta: (name: string) => FieldMetaProps<any>;
}
