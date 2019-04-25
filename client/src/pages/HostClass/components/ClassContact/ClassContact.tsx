import Grid from '@material-ui/core/Grid';
import { Form, Formik } from 'formik';
import React from 'react';
import Block from 'src/common/components/Block';
import Divider from 'src/common/components/Divider';
import FormField from 'src/common/components/FormField';
import Paper from 'src/common/components/Paper';
import TextInput from 'src/common/components/TextInput';
import { validationSchemas } from '../../constants';
import { NavFunctions } from '../../handlers/createNavFunctions';
import { ClassContactInput } from '../../types';
import Navigation from '../Navigation';

export interface ClassContactProps<I> {
  initialValues: I;
  goNext: NavFunctions<I>['goNext'];
  goPrevious: NavFunctions<I>['goPrevious'];
}

const ClassContact: React.FunctionComponent<
  ClassContactProps<ClassContactInput>
> = ({ initialValues, goNext, goPrevious }) => (
  <Formik
    validationSchema={validationSchemas.contact}
    initialValues={initialValues}
    onSubmit={goNext}
  >
    {({ errors, touched, values }) => (
      <Form>
        <Block size="sm">
          <Paper>
            <Grid container>
              <Grid item xs={12}>
                <FormField name="country" errors={errors} touched={touched}>
                  {({ field }) => <TextInput {...field} label="Country*" />}
                </FormField>

                <FormField
                  name="streetAddress"
                  errors={errors}
                  touched={touched}
                >
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
                  {({ field }) => (
                    <TextInput {...field} label="Suburb / Town*" />
                  )}
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

            <Divider marginTop={1} />

            <Grid container>
              <Grid item xs={12}>
                <FormField
                  name="contactNumber"
                  errors={errors}
                  touched={touched}
                >
                  {({ field }) => (
                    <TextInput {...field} label="Contact number*" />
                  )}
                </FormField>
              </Grid>
            </Grid>
          </Paper>
          <Navigation goPrevious={() => goPrevious(values)} />
        </Block>
      </Form>
    )}
  </Formik>
);

export default ClassContact;
