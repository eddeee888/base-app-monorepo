import { useViewer } from "common/components/ViewerProvider";
import LoginFormComponent from "pages/Login/LoginForm/LoginFormComponent";
import React, { useState } from "react";
import createHandleLoginFn from "./functionCreators/createHandleLoginFn";
import { useLoginMutation } from "./Login.generated";

const LoginForm: React.FunctionComponent = () => {
  const { setViewer } = useViewer();
  const [login, { loading }] = useLoginMutation();
  const [error, setError] = useState("");

  return <LoginFormComponent generalFormError={error} isSubmitting={loading} onSubmit={createHandleLoginFn(login, setViewer, setError)} />;
};

export default LoginForm;
