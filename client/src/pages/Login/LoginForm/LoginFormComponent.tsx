import Grid from '@material-ui/core/Grid';
import { LoginInput } from '__generated__/globalTypes';
import Button from 'common/components/Button';
import FormError from 'common/components/FormError';
import FormField from 'common/components/FormField';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import TextInput from 'common/components/TextInput';
import { linkgen, Paths } from 'common/helpers/pathing';
import useUrlQuery from 'common/hooks/useUrlQuery';
import { Form, Formik, FormikActions } from 'formik';
import React from 'react';
import * as Yup from 'yup';

export type LoginFormikFn = (
  formValues: LoginInput,
  actions: FormikActions<LoginInput>
) => void;

interface Props {
  onSubmit: LoginFormikFn;
  generalFormError: string;
  isSubmitting: boolean;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required')
});

const LoginFormComponent: React.FunctionComponent<Props> = ({
  onSubmit,
  generalFormError,
  isSubmitting
}) => {
  const query = useUrlQuery();

  return (
    <Formik<LoginInput>
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
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
            Don't have an account?{' '}
            <Link to={linkgen(Paths.signup, { query })}>Sign up</Link>
          </Text>

          <Button
            type="submit"
            disabled={isSubmitting}
            showSpinner={isSubmitting}
          >
            Log in
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginFormComponent;
