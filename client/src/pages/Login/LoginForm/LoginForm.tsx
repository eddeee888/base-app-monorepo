import React, { useContext, useState } from 'react';
import ViewerContext from 'src/common/components/ViewerContext';
import { QueryStringOptions } from 'src/common/helpers/pathing';
import LoginFormComponent from 'src/pages/Login/LoginForm/LoginFormComponent';
import LoginFormMutation from 'src/pages/Login/LoginForm/LoginFormMutation';
import createHandleLoginFn from './handlers/createHandleLoginFn';

interface Props {
  queryStringOptions: QueryStringOptions;
}

const LoginForm: React.FunctionComponent<Props> = ({ queryStringOptions }) => {
  const { setViewer } = useContext(ViewerContext);
  const [generalError, setGeneralError] = useState<string>('');

  return (
    <LoginFormMutation>
      {(login, { loading }) => (
        <LoginFormComponent
          generalError={generalError}
          isSubmitting={loading}
          handleSubmit={createHandleLoginFn(login, setViewer, setGeneralError)}
          queryStringOptions={queryStringOptions}
        />
      )}
    </LoginFormMutation>
  );
};

export default LoginForm;
