import Grid from '@material-ui/core/Grid';
import Block from 'common/components/Block';
import Divider from 'common/components/Divider';
import FormField from 'common/components/FormField';
import Paper from 'common/components/Paper';
import TextInput from 'common/components/TextInput';
import { Form, Formik } from 'formik';
import React from 'react';
import { validationSchemas } from '../../constants';
import { NavFns } from '../../functionCreators/createNavFns';
import { FormClassContactInput } from '../../types';
import Navigation from '../Navigation';

export interface ClassContactProps<I> {
  initialValues: I;
  goNext: NavFns<I>['goNext'];
  goPrevious: NavFns<I>['goPrevious'];
}

const ClassContact: React.FunctionComponent<
  ClassContactProps<FormClassContactInput>
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

                <FormField name="streetUnit" errors={errors} touched={touched}>
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
