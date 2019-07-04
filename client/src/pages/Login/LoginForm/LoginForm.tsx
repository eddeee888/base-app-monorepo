import { useViewer } from 'common/components/ViewerContext';
import useFormError from 'common/hooks/useFormError';
import LoginFormComponent from 'pages/Login/LoginForm/LoginFormComponent';
import React from 'react';
import createHandleLoginFn from './functionCreators/createHandleLoginFn';
import { LoginMutationComponent } from '../Login.generated';

const LoginForm: React.FunctionComponent = () => {
  const { setViewer } = useViewer();
  const [formError] = useFormError(1);

  return (
    <LoginMutationComponent>
      {(login, { loading }) => (
        <LoginFormComponent
          generalFormError={formError.error}
          isSubmitting={loading}
          onSubmit={createHandleLoginFn(login, setViewer, formError.setError)}
        />
      )}
    </LoginMutationComponent>
  );
};

export default LoginForm;
