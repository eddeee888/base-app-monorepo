import { SetViewerFn } from 'common/components/ViewerProvider';
import { FormErrorObject } from 'common/hooks/useFormError';
import { LoginFormikFn } from 'pages/Login/LoginForm/LoginFormComponent';
import { LoginMutationFn } from './../Login.generated';

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
  try {
    const fetchResult = await login({
      variables: {
        input: {
          ...formValues
        }
      }
    });
    if (fetchResult && fetchResult.data && fetchResult.data.login) {
      setViewer({
        id: fetchResult.data.login.id,
        avatar: fetchResult.data.login.avatar
      });
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
