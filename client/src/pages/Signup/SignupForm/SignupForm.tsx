import { useViewer } from 'common/components/ViewerProvider';
import { checkClientApolloError } from '@bit/eddeee888.base-react-app-utils.graphql';
import useFormError from 'common/hooks/useFormError';
import SignupFormComponent from 'pages/Signup/SignupForm/SignupFormComponent';
import React from 'react';
import { useSignupMutation } from './Signup.generated';

const SignupForm: React.FunctionComponent = () => {
  const { setViewer } = useViewer();
  const [formError] = useFormError(1);
  const [signup, { loading }] = useSignupMutation();

  return (
    <SignupFormComponent
      onSubmit={async (values, { setErrors }) => {
        try {
          const result = await signup({
            variables: {
              input: {
                ...values
              }
            }
          });
          if (result && result.data) {
            setViewer({
              id: result.data.signup.id,
              avatar: result.data.signup.avatar
            });
          } else {
            formError.setError('Unexpected error occurred!');
          }
        } catch (error) {
          const clientError = checkClientApolloError(error);
          if (clientError.code === 'BAD_USER_INPUT' && clientError.metadata) {
            setErrors(clientError.metadata);
          } else {
            formError.setError('Unexpected error occurred!');
          }
        }
      }}
      generalFormError={formError.error}
      loading={loading}
    />
  );
};

export default SignupForm;
