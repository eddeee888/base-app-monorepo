import React, { useContext } from 'react';
import ViewerContext from 'src/common/components/ViewerContext';
import useFormError from 'src/common/hooks/useFormError';
import LoginFormComponent from 'src/pages/Login/LoginForm/LoginFormComponent';
import LoginFormMutation from 'src/pages/Login/LoginForm/LoginFormMutation';
import createHandleLoginFn from './handlers/createHandleLoginFn';

const LoginForm: React.FunctionComponent = () => {
  const { setViewer } = useContext(ViewerContext);
  const [formError] = useFormError(1);

  return (
    <LoginFormMutation>
      {(login, { loading }) => (
        <LoginFormComponent
          generalFormError={formError.formErrorProps}
          isSubmitting={loading}
          onSubmit={createHandleLoginFn(login, setViewer, formError.setError)}
        />
      )}
    </LoginFormMutation>
  );
};

export default LoginForm;
