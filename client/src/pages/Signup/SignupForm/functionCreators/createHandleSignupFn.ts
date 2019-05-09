import {
  checkError,
  CustomGraphQLErrors
} from '@bit/eddeee888.base-react-app-utils.graphql';
import { SetViewerFn } from 'common/components/ViewerContext';
import { FormErrorObject } from 'common/hooks/useFormError/useFormError';
import { SignupFormikFn } from 'pages/Signup/SignupForm/SignupFormComponent';
import {
  SignupMutationFn,
  SignupMutationOptions
} from 'pages/Signup/SignupForm/SignupFormMutation';

type CreateHandleSignupFn = (
  signup: SignupMutationFn,
  setViewer: SetViewerFn,
  setGeneralError: FormErrorObject['setError']
) => SignupFormikFn;

const createHandleSignupFn: CreateHandleSignupFn = (
  signup,
  setViewer,
  setGeneralError
) => async (values, actions) => {
  const options: SignupMutationOptions = {
    variables: {
      input: {
        ...values
      }
    }
  };

  try {
    const result = await signup(options);
    if (result && result.data) {
      setViewer({
        id: result.data.signup.user.id
      });
    } else {
      setGeneralError('Unexpected error occurred!');
    }
  } catch (error) {
    const checkedError = checkError(error);

    if (checkedError.name === CustomGraphQLErrors.FormValidationError) {
      actions.setErrors(checkedError.data);
    } else {
      setGeneralError('Unexpected error occurred!');
    }
  }
};

export default createHandleSignupFn;
