import { SetViewerFn } from 'src/common/components/ViewerContext';
import { LoginFormikFn } from 'src/pages/Login/LoginForm/LoginFormComponent';
import {
  LoginMutationFn,
  LoginMutationOptions
} from 'src/pages/Login/LoginForm/LoginFormMutation';

type CreateHandleLoginFn = (
  login: LoginMutationFn,
  setViewer: SetViewerFn,
  setGeneralError: React.Dispatch<React.SetStateAction<string>>
) => LoginFormikFn;

const createHandleLoginFn: CreateHandleLoginFn = (
  login,
  setViewer,
  setGeneralError
) => {
  return async formValues => {
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
};

export default createHandleLoginFn;
