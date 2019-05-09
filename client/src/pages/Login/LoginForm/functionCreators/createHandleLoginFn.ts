import { SetViewerFn } from 'common/components/ViewerContext';
import { FormErrorObject } from 'common/hooks/useFormError/useFormError';
import { LoginFormikFn } from 'pages/Login/LoginForm/LoginFormComponent';
import {
  LoginMutationFn,
  LoginMutationOptions
} from 'pages/Login/LoginForm/LoginFormMutation';

type CreateHandleLoginFn = (
  login: LoginMutationFn,
  setViewer: SetViewerFn,
  setGeneralError: FormErrorObject['setError']
) => LoginFormikFn;

const createHandleLoginFn: CreateHandleLoginFn = (
  login,
  setViewer,
  setGeneralError
) => async formValues => {
  const options: LoginMutationOptions = {
    variables: {
      input: {
        ...formValues
      }
    }
  };

  try {
    const fetchResult = await login(options);
    if (
      fetchResult &&
      fetchResult.data &&
      fetchResult.data.login &&
      fetchResult.data.login.user
    ) {
      setViewer({ id: fetchResult.data.login.user.id });
    } else {
      setGeneralError(
        'The email/password combination you entered is incorrect.'
      );
    }
  } catch (error) {
    setGeneralError('Unexpected error occurred.');
  }
};

export default createHandleLoginFn;
