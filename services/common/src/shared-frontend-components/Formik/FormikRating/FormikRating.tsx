import React from "react";
import { FormikBag } from "../types";
import prepareFieldProps from "../prepareFieldProps";
import FormError from "../../FormError";
import { Rating, RatingProps } from "@material-ui/lab";

type FormikRatingProps<Values> = {
  name: keyof Values;
  formik: FormikBag<Values>;
} & Omit<Omit<Omit<Omit<RatingProps, "onChange">, "value">, "name">, "precision">;

function FormikRating<Values = Record<string, unknown>>({ name, formik, ...rest }: FormikRatingProps<Values>): JSX.Element {
  const { touched, error, props } = prepareFieldProps(formik, name);

  return (
    <>
      <Rating
        {...rest}
        value={props.value}
        name={props.name}
        onChange={(e, value) => {
          formik.setFieldTouched(name, true, true);
          formik.setFieldValue(name, value, true);
        }}
      />
      {touched && <FormError error={error} />}
    </>
  );
}

export default FormikRating;
