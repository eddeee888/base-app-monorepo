import {
  checkError,
  CustomGraphQLErrors
} from '@bit/eddeee888.learnd-utils.graphql';
import { SetViewerFn } from 'src/common/components/ViewerContext';
import { SignupFormikFn } from 'src/pages/Signup/SignupForm/SignupFormComponent';
import {
  SignupMutationFn,
  SignupMutationOptions
} from 'src/pages/Signup/SignupForm/SignupFormMutation';

type CreateHandleSignupFn = (
  signup: SignupMutationFn,
  setViewer: SetViewerFn,
  setGeneralError: React.Dispatch<React.SetStateAction<string>>
) => SignupFormikFn;

const createHandleSignupFn: CreateHandleSignupFn = (
  signup,
  setViewer,
  setGeneralError
) => {
  return async (values, actions) => {
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
};

export default createHandleSignupFn;
