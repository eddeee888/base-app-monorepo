import React, { useContext, useState } from 'react';
import ViewerContext from 'src/common/components/ViewerContext';
import SignupFormComponent from 'src/pages/Signup/SignupForm/SignupFormComponent';
import SignupFormMutation from 'src/pages/Signup/SignupForm/SignupFormMutation';
import createHandleSignupFn from './handlers/createHandleSignupFn';

const SignupForm: React.FunctionComponent = () => {
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
        />
      )}
    </SignupFormMutation>
  );
};

export default SignupForm;
