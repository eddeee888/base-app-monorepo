import React, { useContext } from 'react';
import ViewerContext from 'src/common/components/ViewerContext';
import useFormError from 'src/common/hooks/useFormError';
import SignupFormComponent from 'src/pages/Signup/SignupForm/SignupFormComponent';
import SignupFormMutation from 'src/pages/Signup/SignupForm/SignupFormMutation';
import createHandleSignupFn from './handlers/createHandleSignupFn';

const SignupForm: React.FunctionComponent = () => {
  const { setViewer } = useContext(ViewerContext);
  const [formError] = useFormError(1);

  return (
    <SignupFormMutation>
      {(signup, { loading }) => (
        <SignupFormComponent
          onSubmit={createHandleSignupFn(signup, setViewer, formError.setError)}
          generalFormError={formError.formErrorProps}
          loading={loading}
        />
      )}
    </SignupFormMutation>
  );
};

export default SignupForm;
