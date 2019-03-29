import Grid from '@material-ui/core/Grid';
import { Form, Formik } from 'formik';
import React from 'react';
import FormField from 'src/common/components/FormField';
import TextInput from 'src/common/components/TextInput';
import * as Yup from 'yup';
import { initialValues } from '../../constants';
import { ClassContactInput } from '../../types';

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
              <FormField name="streetAddress" errors={errors} touched={touched}>
                {({ field }) => (
                  <TextInput {...field} label="Street address*" />
                )}
              </FormField>

              <FormField name="city" errors={errors} touched={touched}>
                {({ field }) => <TextInput {...field} label="City*" />}
              </FormField>

              <FormField name="postcode" errors={errors} touched={touched}>
                {({ field }) => <TextInput {...field} label="Postcode" />}
              </FormField>

              <FormField name="postcode" errors={errors} touched={touched}>
                {({ field }) => <TextInput {...field} label="Postcode" />}
              </FormField>

              <FormField name="country" errors={errors} touched={touched}>
                {({ field }) => <TextInput {...field} label="Country*" />}
              </FormField>

              <FormField name="contactNumber" errors={errors} touched={touched}>
                {({ field }) => <TextInput {...field} label="contactNumber" />}
              </FormField>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default ClassContact;
