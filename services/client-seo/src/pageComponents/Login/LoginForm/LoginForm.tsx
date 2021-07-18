import { useState, FunctionComponent } from "react";
import { Grid } from "@material-ui/core";
import { FormError, FormikTextInput, useFetch } from "@/shared/frontend-components";
import { ButtonX } from "@/common";
import { StandardSpace, Text } from "@/shared/ui";
import { loginSchema } from "@/shared/validations";
import { useFormik } from "formik";
import { LinkSignup, generateUrlXhrLogin } from "@/routes";

export interface LoginFormProps {
  redirectDestination: string;
  onCompleted: () => void;
}

const LoginForm: FunctionComponent<LoginFormProps> = ({ redirectDestination, onCompleted }) => {
  const [generalError, setGeneralError] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [post, { loading }] = useFetch({
    url: generateUrlXhrLogin(),
    method: "POST",
    onError: () => setGeneralError("The email/password combination you entered is incorrect."),
    onCompleted: () => {
      setIsCompleted(true);
      onCompleted();
    },
  });
  const formik = useFormik<{ email: string; password: string }>({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (data) => {
      post({
        body: {
          email: data.email,
          password: data.password,
        },
      });
    },
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

      <FormError error={generalError} />

      <Text gutterBottom>
        {"Don't have an account? "}
        <LinkSignup urlParams={{ query: { redirect: redirectDestination } }}>Sign up</LinkSignup>
      </Text>

      <StandardSpace size={1} />

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <ButtonX type="submit" loading={loading || isCompleted}>
            Log In
          </ButtonX>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
