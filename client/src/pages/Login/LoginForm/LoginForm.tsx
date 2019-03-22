import React, { useContext, useState } from 'react';
import ViewerContext from 'src/common/components/ViewerContext';
import LoginFormComponent from 'src/pages/Login/LoginForm/LoginFormComponent';
import LoginFormMutation from 'src/pages/Login/LoginForm/LoginFormMutation';
import createHandleLoginFn from './handlers/createHandleLoginFn';

const LoginForm: React.FunctionComponent = () => {
  const { setViewer } = useContext(ViewerContext);
  const [generalError, setGeneralError] = useState<string>('');

  return (
    <LoginFormMutation>
      {(login, { loading }) => (
        <LoginFormComponent
          generalError={generalError}
          isSubmitting={loading}
          handleSubmit={createHandleLoginFn(login, setViewer, setGeneralError)}
        />
      )}
    </LoginFormMutation>
  );
};

export default LoginForm;
