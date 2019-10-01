import { useViewer } from 'common/components/ViewerContext';
import useFormError from 'common/hooks/useFormError';
import LoginFormComponent from 'pages/Login/LoginForm/LoginFormComponent';
import React from 'react';
import createHandleLoginFn from './functionCreators/createHandleLoginFn';
import { useLoginMutation } from './Login.generated';

const LoginForm: React.FunctionComponent = () => {
  const { setViewer } = useViewer();
  const [login, { loading }] = useLoginMutation();
  const [formError] = useFormError(1);

  return (
    <LoginFormComponent
      generalFormError={formError.error}
      isSubmitting={loading}
      onSubmit={createHandleLoginFn(login, setViewer, formError.setError)}
    />
  );
};

export default LoginForm;
