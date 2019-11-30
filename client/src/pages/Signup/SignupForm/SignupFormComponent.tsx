import {
  emailValidation,
  nameValidation,
  passwordValidation
} from '@bit/eddeee888.base-react-app-utils.validations';
import { Grid } from '@material-ui/core';
import Button from 'common/components/Button';
import FormError from 'common/components/FormError';
import Text from 'common/components/Text';
import { routes, useUrlQuery } from 'common/pathing';
import { FormikHelpers, useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { SignupInput } from '__generated__/types';
import FormikTextInput from 'common/components/Formik/FormikTextInput';

export type SignupFormikFn = (
  formValues: SignupInput,
  actions: FormikHelpers<SignupInput>
) => void;

const validationSchema = Yup.object().shape({
  firstName: nameValidation('first'),
  lastName: nameValidation('last'),
  email: emailValidation,
  password: passwordValidation
});

interface Props {
  onSubmit: SignupFormikFn;
  loading: boolean;
  generalFormError: string;
}

const SignupFormComponent: React.FunctionComponent<Props> = ({
  onSubmit,
  loading,
  generalFormError
}) => {
  const query = useUrlQuery();
  const formik = useFormik<SignupInput>({
    onSubmit,
    validationSchema,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <FormikTextInput formik={formik} name="email" label="Email" />
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <FormikTextInput
            formik={formik}
            name="firstName"
            label="First name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormikTextInput formik={formik} name="lastName" label="Last name" />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <FormikTextInput
            formik={formik}
            name="password"
            type="password"
            label="Password"
          />
        </Grid>
      </Grid>

      <FormError error={generalFormError} />

      <Text gutterBottom>
        Already have an account?{' '}
        <routes.login.Link params={{}} urlQuery={query}>
          Log in
        </routes.login.Link>
      </Text>

      <Button type="submit" disabled={loading} showSpinner={loading}>
        Submit
      </Button>
    </form>
  );
};

export default SignupFormComponent;
