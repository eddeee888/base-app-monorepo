import {
  emailValidation,
  nameValidation,
  passwordValidation
} from '@bit/eddeee888.learnd-utils.forms.validations';
import Grid from '@material-ui/core/Grid';
import { Field, FieldProps, Form, Formik, FormikActions } from 'formik';
import React from 'react';
import { SignupInput } from 'src/__generated__/globalTypes';
import Button from 'src/common/components/Button';
import FormError, { checkIfError } from 'src/common/components/FormError';
import Link from 'src/common/components/Link';
import Text from 'src/common/components/Text';
import TextInput from 'src/common/components/TextInput';
import { linkgen, Paths } from 'src/common/helpers/pathing';
import { spacingPx } from 'src/common/helpers/spacing';
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
  handleSubmit: SignupFormikFn;
  loading: boolean;
  generalError: string;
}

const SignupFormComponent = ({
  handleSubmit,
  loading,
  generalError
}: Props) => {
  return (
    <Formik<SignupInput>
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Grid container>
            <Grid item xs={12}>
              <Field
                name="email"
                render={({ field }: FieldProps) => (
                  <TextInput
                    {...field}
                    label="Email"
                    error={checkIfError(errors.email, touched.email)}
                  />
                )}
              />
              <FormError error={errors.email} display={touched.email} />
            </Grid>
          </Grid>

          <Grid container spacing={spacingPx(2)}>
            <Grid item xs={12} md={6}>
              <Field
                name="firstName"
                render={({ field }: FieldProps) => (
                  <TextInput
                    {...field}
                    label="First name"
                    error={checkIfError(errors.firstName, touched.firstName)}
                  />
                )}
              />
              <FormError error={errors.firstName} display={touched.firstName} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                name="lastName"
                render={({ field }: FieldProps) => (
                  <TextInput
                    {...field}
                    label="Last name"
                    error={checkIfError(errors.lastName, touched.lastName)}
                  />
                )}
              />
              <FormError error={errors.lastName} display={touched.lastName} />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Field
                name="password"
                render={({ field }: FieldProps) => (
                  <TextInput
                    {...field}
                    type="password"
                    label="Password"
                    error={checkIfError(errors.password, touched.password)}
                  />
                )}
              />
              <FormError error={errors.password} display={touched.password} />
            </Grid>
          </Grid>

          <FormError error={generalError} display={!!generalError} />

          <Text gutterBottom>
            Already have an account?{' '}
            <Link to={linkgen(Paths.login)}>Log in</Link>
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
