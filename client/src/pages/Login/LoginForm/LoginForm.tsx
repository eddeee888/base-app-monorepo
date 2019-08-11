import { useViewer } from 'common/components/ViewerContext';
import useFormError from 'common/hooks/useFormError';
import LoginFormComponent from 'pages/Login/LoginForm/LoginFormComponent';
import React from 'react';
import createHandleLoginFn from './functionCreators/createHandleLoginFn';
import { LoginComponent } from '../Login.generated';

const LoginForm: React.FunctionComponent = () => {
  const { setViewer } = useViewer();
  const [formError] = useFormError(1);

  return (
    <LoginComponent>
      {(login, { loading }) => (
        <LoginFormComponent
          generalFormError={formError.error}
          isSubmitting={loading}
          onSubmit={createHandleLoginFn(login, setViewer, formError.setError)}
        />
      )}
    </LoginComponent>
  );
};

export default LoginForm;
