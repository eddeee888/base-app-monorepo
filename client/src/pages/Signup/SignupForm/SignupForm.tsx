import React, { useContext, useState } from 'react';
import ViewerContext from 'src/common/components/ViewerContext';
import { QueryStringOptions } from 'src/common/helpers/pathing';
import SignupFormComponent from 'src/pages/Signup/SignupForm/SignupFormComponent';
import SignupFormMutation from 'src/pages/Signup/SignupForm/SignupFormMutation';
import createHandleSignupFn from './handlers/createHandleSignupFn';

interface Props {
  queryStringOptions: QueryStringOptions;
}

const SignupForm: React.FunctionComponent<Props> = ({ queryStringOptions }) => {
  const { setViewer } = useContext(ViewerContext);
  const [generalError, setGeneralError] = useState<string>('');

  return (
    <SignupFormMutation>
      {(signup, { loading }) => (
        <SignupFormComponent
          handleSubmit={createHandleSignupFn(
            signup,
            setViewer,
            setGeneralError
          )}
          generalError={generalError}
          loading={loading}
          queryStringOptions={queryStringOptions}
        />
      )}
    </SignupFormMutation>
  );
};

export default SignupForm;
