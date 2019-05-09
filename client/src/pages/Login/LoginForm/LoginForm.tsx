import ViewerContext from 'common/components/ViewerContext';
import useFormError from 'common/hooks/useFormError';
import LoginFormComponent from 'pages/Login/LoginForm/LoginFormComponent';
import LoginFormMutation from 'pages/Login/LoginForm/LoginFormMutation';
import React, { useContext } from 'react';
import createHandleLoginFn from './functionCreators/createHandleLoginFn';

const LoginForm: React.FunctionComponent = () => {
  const { setViewer } = useContext(ViewerContext);
  const [formError] = useFormError(1);

  return (
    <LoginFormMutation>
      {(login, { loading }) => (
        <LoginFormComponent
          generalFormError={formError.error}
          isSubmitting={loading}
          onSubmit={createHandleLoginFn(login, setViewer, formError.setError)}
        />
      )}
    </LoginFormMutation>
  );
};

export default LoginForm;
