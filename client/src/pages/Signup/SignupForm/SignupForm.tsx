import ViewerContext from 'common/components/ViewerContext';
import useFormError from 'common/hooks/useFormError';
import SignupFormComponent from 'pages/Signup/SignupForm/SignupFormComponent';
import SignupFormMutation from 'pages/Signup/SignupForm/SignupFormMutation';
import React, { useContext } from 'react';
import createHandleSignupFn from './functionCreators/createHandleSignupFn';

const SignupForm: React.FunctionComponent = () => {
  const { setViewer } = useContext(ViewerContext);
  const [formError] = useFormError(1);

  return (
    <SignupFormMutation>
      {(signup, { loading }) => (
        <SignupFormComponent
          onSubmit={createHandleSignupFn(signup, setViewer, formError.setError)}
          generalFormError={formError.error}
          loading={loading}
        />
      )}
    </SignupFormMutation>
  );
};

export default SignupForm;
