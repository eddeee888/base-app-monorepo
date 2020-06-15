import { Grid } from "@material-ui/core";
import Button from "common/shared-ui/Button";
import FormError from "common/components/FormError";
import Text from "common/shared-ui/Text";
import { FormikHelpers, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { LoginInput } from "common/__generated__/types";
import FormikTextInput from "common/components/Formik/FormikTextInput";
import useUrlQuery from "common/pathing/useUrlQuery";
import LinkSignup from "routes/signup/LinkSignup";

export type LoginFormikFn = (formValues: LoginInput, actions: FormikHelpers<LoginInput>) => void;

interface Props {
  onSubmit: LoginFormikFn;
  generalFormError: string;
  isSubmitting: boolean;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormComponent: React.FunctionComponent<Props> = ({ onSubmit, generalFormError, isSubmitting }) => {
  const query = useUrlQuery();
  const formik = useFormik<LoginInput>({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <FormikTextInput formik={formik} name="email" label="Email" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormikTextInput formik={formik} name="password" type="password" label="Password" />
        </Grid>
      </Grid>

      <FormError error={generalFormError} />

      <Text gutterBottom>
        {"Don't have an account? "}
        <LinkSignup urlQuery={query}>Sign up</LinkSignup>
      </Text>

      <Button type="submit" disabled={isSubmitting} showSpinner={isSubmitting}>
        Log in
      </Button>
    </form>
  );
};

export default LoginFormComponent;
