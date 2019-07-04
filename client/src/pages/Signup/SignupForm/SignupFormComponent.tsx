import {
  emailValidation,
  nameValidation,
  passwordValidation
} from '@bit/eddeee888.base-react-app-utils.validations';
import Grid from '@material-ui/core/Grid';
import Button from 'common/components/Button';
import FormError from 'common/components/FormError';
import FormField from 'common/components/FormField';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import TextInput from 'common/components/TextInput';
import { routes } from 'common/helpers/pathing';
import useUrlQuery from 'common/hooks/useUrlQuery';
import { Form, Formik, FormikActions } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { SignupInput } from '__generated__/types';

export type SignupFormikFn = (
  formValues: SignupInput,
  actions: FormikActions<SignupInput>
) => void;

const SignupSchema = Yup.object().shape({
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
  return (
    <Formik<SignupInput>
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Grid container>
            <Grid item xs={12}>
              <FormField name="email" errors={errors} touched={touched}>
                {({ field }) => <TextInput {...field} label="Email" />}
              </FormField>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <FormField name="firstName" errors={errors} touched={touched}>
                {({ field }) => <TextInput {...field} label="First name" />}
              </FormField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField name="lastName" errors={errors} touched={touched}>
                {({ field }) => <TextInput {...field} label="Last name" />}
              </FormField>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <FormField name="password" errors={errors} touched={touched}>
                {({ field }) => (
                  <TextInput {...field} type="password" label="Password" />
                )}
              </FormField>
            </Grid>
          </Grid>

          <FormError error={generalFormError} />

          <Text gutterBottom>
            Already have an account?{' '}
            <Link to={routes.login.generate({}, query)}>Log in</Link>
          </Text>

          <Button type="submit" disabled={loading} showSpinner={loading}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupFormComponent;
