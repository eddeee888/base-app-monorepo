import React, { useState } from "react";
import { useViewer } from "common/components/ViewerProvider";
import { useSignupMutation } from "./Signup.generated";
import { Grid } from "@material-ui/core";
import FormikTextInput from "common/components/Formik/FormikTextInput";
import FormError from "common/components/FormError";
import Text from "common/shared-ui/Text";
import Button from "common/shared-ui/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import { SignupInput } from "__generated__/types";
import useUrlQuery from "common/pathing/useUrlQuery";
import LinkLogin from "routes/login/LinkLogin";
import checkClientApolloError from "common/shared-graphqlErrors/checkClientApolloError";
import passwordValidation from "common/shared-validations/passwordValidation";
import nameValidation from "common/shared-validations/nameValidation";
import emailValidation from "common/shared-validations/emailValidation";

const validationSchema = Yup.object().shape({
  firstName: nameValidation("first"),
  lastName: nameValidation("last"),
  email: emailValidation,
  password: passwordValidation,
});

const SignupForm: React.FunctionComponent = () => {
  const { setViewer } = useViewer();
  const query = useUrlQuery();
  const [formError, setFormError] = useState("");
  const [signup, { loading }] = useSignupMutation({
    onCompleted: (data) =>
      setViewer({
        id: data.signup.id,
        avatar: data.signup.avatar,
        firstName: data.signup.firstName,
      }),
  });

  const formik = useFormik<SignupInput>({
    onSubmit: async (values) => {
      try {
        const { data } = await signup({
          variables: {
            input: {
              email: values.email,
              firstName: values.firstName,
              lastName: values.lastName,
              password: values.password,
            },
          },
        });

        if (data) {
          setViewer({
            id: data.signup.id,
            avatar: data.signup.avatar,
            firstName: data.signup.firstName,
          });
        } else {
          setFormError("Unexpected error occurred!");
        }
      } catch (e) {
        const clientError = checkClientApolloError(e);
        if (clientError.code === "BAD_USER_INPUT" && clientError.metadata) {
          formik.setErrors(clientError.metadata);
          setFormError("");
        } else {
          setFormError("Sorry, error occurred while signing up. Please try again or contact admin.");
        }
      }
    },
    validationSchema,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
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
          <FormikTextInput formik={formik} name="firstName" label="First name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormikTextInput formik={formik} name="lastName" label="Last name" />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <FormikTextInput formik={formik} name="password" type="password" label="Password" />
        </Grid>
      </Grid>

      <FormError error={formError} />

      <Text gutterBottom>
        Already have an account? <LinkLogin urlQuery={query}>Log in</LinkLogin>
      </Text>

      <Button type="submit" disabled={loading} showSpinner={loading}>
        Submit
      </Button>
    </form>
  );
};

export default SignupForm;
