import { SetViewerFn } from "common/components/ViewerProvider";
import { LoginFormikFn } from "pages/Login/LoginForm/LoginFormComponent";
import { LoginMutationFn } from "./../Login.generated";

type CreateHandleLoginFn = (
  login: LoginMutationFn,
  setViewer: SetViewerFn,
  setGeneralError: React.Dispatch<React.SetStateAction<string>>
) => LoginFormikFn;

const createHandleLoginFn: CreateHandleLoginFn = (login, setViewer, setGeneralError) => async (formValues) => {
  try {
    const fetchResult = await login({
      variables: {
        input: {
          email: formValues.email,
          password: formValues.password,
        },
      },
    });
    if (fetchResult && fetchResult.data && fetchResult.data.login) {
      setViewer({
        id: fetchResult.data.login.id,
        avatar: fetchResult.data.login.avatar,
        firstName: fetchResult.data.login.firstName,
      });
    } else {
      setGeneralError("The email/password combination you entered is incorrect.");
    }
  } catch (error) {
    setGeneralError("Unexpected error occurred.");
  }
};

export default createHandleLoginFn;
