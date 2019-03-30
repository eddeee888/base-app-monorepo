import Grid from '@material-ui/core/Grid';
import { Form, Formik } from 'formik';
import React from 'react';
import FormField from 'src/common/components/FormField';
import TextInput from 'src/common/components/TextInput';
import * as Yup from 'yup';
import { ClassContactInput } from '../../types';
import Navigation from '../Navigation';

interface Props {
  initialValues: ClassContactInput;
}

const validationSchema = Yup.object().shape<ClassContactInput>({
  streetAddress: Yup.string().required('Street address is required'),
  city: Yup.string().required('City is required'),
  postcode: Yup.string(),
  country: Yup.string().required('Country is required'),
  contactNumber: Yup.string().required('Contact number is required'),
  unit: Yup.string(),
  state: Yup.string().required('State is required')
});

const ClassContact: React.FunctionComponent<Props> = ({ initialValues }) => {
  return (
    <Formik<ClassContactInput>
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={values => {}}
    >
      {({ errors, touched }) => (
        <Form>
          <Grid container>
            <Grid item xs={12}>
              <FormField name="country" errors={errors} touched={touched}>
                {({ field }) => <TextInput {...field} label="Country*" />}
              </FormField>

              <FormField name="streetAddress" errors={errors} touched={touched}>
                {({ field }) => (
                  <TextInput
                    {...field}
                    label="Street address*"
                    placeholder="e.g. 123 Main St"
                  />
                )}
              </FormField>

              <FormField name="unit" errors={errors} touched={touched}>
                {({ field }) => (
                  <TextInput
                    {...field}
                    label="Unit, Apt"
                    placeholder="e.g. Unit 400"
                  />
                )}
              </FormField>
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            <Grid item xs={12} md={5}>
              <FormField name="city" errors={errors} touched={touched}>
                {({ field }) => <TextInput {...field} label="Suburb / Town*" />}
              </FormField>
            </Grid>
            <Grid item xs={12} md={5}>
              <FormField name="state" errors={errors} touched={touched}>
                {({ field }) => <TextInput {...field} label="State" />}
              </FormField>
            </Grid>

            <Grid item xs={12} md={5}>
              <FormField name="postcode" errors={errors} touched={touched}>
                {({ field }) => <TextInput {...field} label="Postcode" />}
              </FormField>
            </Grid>
          </Grid>

          <hr />

          <Grid container>
            <Grid item xs={12}>
              <FormField name="contactNumber" errors={errors} touched={touched}>
                {({ field }) => (
                  <TextInput {...field} label="Contact number*" />
                )}
              </FormField>
            </Grid>
          </Grid>

          <Navigation />
        </Form>
      )}
    </Formik>
  );
};

export default ClassContact;
