import Grid from '@material-ui/core/Grid';
import { Field, FieldProps, Form, Formik } from 'formik';
import React from 'react';
import FormError, { checkIfError } from 'src/common/components/FormError';
import TextInput from 'src/common/components/TextInput';
import * as Yup from 'yup';
import { initialValues } from '../../constants';
import { ClassContactInput } from '../../types';
import Navigation from '../Navigation';

// TOTEST
const validationSchema = Yup.object().shape<ClassContactInput>({
  streetAddress: Yup.string().required('Street address is required'),
  city: Yup.string().required('City is required'),
  postcode: Yup.string(),
  country: Yup.string().required('Country is required'),
  contactNumber: Yup.string().required('Contact number is required')
});

const ClassContact: React.FunctionComponent = () => {
  return (
    <Formik<ClassContactInput>
      validationSchema={validationSchema}
      initialValues={initialValues.contact}
      onSubmit={values => {}}
    >
      {({ errors, touched }) => (
        <Form>
          <Grid container>
            <Grid item xs={12}>
              <Field name="streetAddress">
                {({ field }: FieldProps<ClassContactInput>) => (
                  <TextInput
                    {...field}
                    label="Street address*"
                    error={checkIfError(
                      errors.streetAddress,
                      touched.streetAddress
                    )}
                  />
                )}
              </Field>
              <FormError
                error={errors.streetAddress}
                display={touched.streetAddress}
              />

              <Field name="city">
                {({ field }: FieldProps<ClassContactInput>) => (
                  <TextInput
                    {...field}
                    label="City*"
                    error={checkIfError(errors.city, touched.city)}
                  />
                )}
              </Field>
              <FormError error={errors.city} display={touched.city} />

              <Field name="postcode">
                {({ field }: FieldProps<ClassContactInput>) => (
                  <TextInput
                    {...field}
                    label="Postcode"
                    error={checkIfError(errors.postcode, touched.postcode)}
                  />
                )}
              </Field>
              <FormError error={errors.postcode} display={touched.postcode} />

              <Field name="country">
                {({ field }: FieldProps<ClassContactInput>) => (
                  <TextInput
                    {...field}
                    label="Country*"
                    error={checkIfError(errors.country, touched.country)}
                  />
                )}
              </Field>
              <FormError error={errors.country} display={touched.country} />

              <Field name="contactNumber">
                {({ field }: FieldProps<ClassContactInput>) => (
                  <TextInput
                    {...field}
                    label="contactNumber"
                    error={checkIfError(
                      errors.contactNumber,
                      touched.contactNumber
                    )}
                  />
                )}
              </Field>
              <FormError
                error={errors.contactNumber}
                display={touched.contactNumber}
              />
            </Grid>
          </Grid>
          <Navigation />
        </Form>
      )}
    </Formik>
  );
};

export default ClassContact;
