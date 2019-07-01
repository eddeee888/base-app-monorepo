import { useViewer } from 'common/components/ViewerContext';
import useFormError from 'common/hooks/useFormError';
import SignupFormComponent from 'pages/Signup/SignupForm/SignupFormComponent';
import React from 'react';
import createHandleSignupFn from './functionCreators/createHandleSignupFn';
import { SignupMutationComponent } from '../Signup.generated';

const SignupForm: React.FunctionComponent = () => {
  const { setViewer } = useViewer();
  const [formError] = useFormError(1);

  return (
    <SignupMutationComponent>
      {(signup, { loading }) => (
        <SignupFormComponent
          onSubmit={createHandleSignupFn(signup, setViewer, formError.setError)}
          generalFormError={formError.error}
          loading={loading}
        />
      )}
    </SignupMutationComponent>
  );
};

export default SignupForm;
