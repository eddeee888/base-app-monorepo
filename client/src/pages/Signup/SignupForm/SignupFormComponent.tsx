import {
  emailValidation,
  nameValidation,
  passwordValidation
} from '@bit/eddeee888.learnd-utils.forms.validations';
import Grid from '@material-ui/core/Grid';
import { Form, Formik, FormikActions } from 'formik';
import React from 'react';
import { SignupInput } from 'src/__generated__/globalTypes';
import Button from 'src/common/components/Button';
import FormError from 'src/common/components/FormError';
import FormField from 'src/common/components/FormField';
import Link from 'src/common/components/Link';
import Text from 'src/common/components/Text';
import TextInput from 'src/common/components/TextInput';
import { linkgen, Paths } from 'src/common/helpers/pathing';
import { spacingPx } from 'src/common/helpers/spacing';
import useUrlQuery from 'src/common/hooks/useUrlQuery';
import * as Yup from 'yup';

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

const SignupFormComponent = ({
  onSubmit,
  loading,
  generalFormError
}: Props) => {
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

          <Grid container spacing={spacingPx(2)}>
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
            <Link to={linkgen(Paths.login, { query })}>Log in</Link>
          </Text>

          <Button type="submit" disabled={loading}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupFormComponent;
