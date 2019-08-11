import {
  CustomGraphQLErrors,
  FormValidationError
} from '@bit/eddeee888.base-react-app-utils.graphql';
import createApolloError from 'test/utils/createApolloError';
import getCustomGraphQLErrorFromErrorName from 'test/utils/getCustomGraphQLErrorFromErrorName';
import createHandleSignupFn from './createHandleSignupFn';
import { SignupInput } from '__generated__/types';

describe('createHandleSignupFn()', () => {
  const signupMutation = jest.fn();
  const setViewer = jest.fn();
  const setGeneralError = jest.fn();
  const signupInput: SignupInput = {
    email: 'eddy@gmail.com',
    password: 'password11!',
    firstName: 'firstName',
    lastName: 'lastName'
  };
  const formikActions: any = {
    setErrors: jest.fn()
  };

  const otherCustomErrors = Object.keys(CustomGraphQLErrors).filter(
    errorName => errorName !== CustomGraphQLErrors.FormValidationError
  );

  afterEach(() => {
    jest.resetAllMocks();
  });

  const assertSignupMutationCalled = (input: SignupInput) => {
    expect(signupMutation).toHaveBeenCalledTimes(1);
    expect(signupMutation).toHaveBeenCalledWith({
      variables: {
        input
      }
    });
  };

  it('result function should set viewer if success', async () => {
    expect.assertions(6);
    const fn = createHandleSignupFn(signupMutation, setViewer, setGeneralError);

    signupMutation.mockResolvedValueOnce({
      data: {
        signup: {
          id: '100',
          email: 'eddy@gmail.com',
          firstName: 'firstName',
          lastName: 'lastName'
        }
      }
    });

    await fn(signupInput, formikActions);

    assertSignupMutationCalled(signupInput);
    expect(setViewer).toHaveBeenCalledTimes(1);
    expect(setViewer).toHaveBeenCalledWith({
      id: '100'
    });
    expect(formikActions.setErrors).toHaveBeenCalledTimes(0);
    expect(setGeneralError).toHaveBeenCalledTimes(0);
  });

  it('result function should show validation error if FormValidationError occurred', async () => {
    expect.assertions(6);
    const fn = createHandleSignupFn(signupMutation, setViewer, setGeneralError);

    signupMutation.mockRejectedValueOnce(
      createApolloError(
        new FormValidationError({ data: { email: 'BAD EMAIL!' } })
      )
    );

    await fn(signupInput, formikActions);

    assertSignupMutationCalled(signupInput);
    expect(setViewer).toHaveBeenCalledTimes(0);
    expect(formikActions.setErrors).toHaveBeenCalledTimes(1);
    expect(formikActions.setErrors).toHaveBeenCalledWith({
      email: 'BAD EMAIL!'
    });
    expect(setGeneralError).toHaveBeenCalledTimes(0);
  });

  otherCustomErrors.forEach(error => {
    it(`result function should show unexpected error if ${error} occurred`, async () => {
      expect.assertions(6);
      const fn = createHandleSignupFn(
        signupMutation,
        setViewer,
        setGeneralError
      );

      const errorName = error as CustomGraphQLErrors;
      const ErrorToThrow = getCustomGraphQLErrorFromErrorName(errorName) as any;

      if (ErrorToThrow) {
        signupMutation.mockRejectedValueOnce(createApolloError(ErrorToThrow));

        await fn(signupInput, formikActions);

        assertSignupMutationCalled(signupInput);
        expect(setViewer).toHaveBeenCalledTimes(0);
        expect(formikActions.setErrors).toHaveBeenCalledTimes(0);
        expect(setGeneralError).toHaveBeenCalledTimes(1);
        expect(setGeneralError).toHaveBeenCalledWith(
          'Unexpected error occurred!'
        );
      }
    });
  });

  it('result function should show unexpected error if non-custom graphql error occurred', async () => {
    expect.assertions(6);
    const fn = createHandleSignupFn(signupMutation, setViewer, setGeneralError);

    signupMutation.mockRejectedValueOnce(new Error('Other random errors'));

    await fn(signupInput, formikActions);

    assertSignupMutationCalled(signupInput);
    expect(setViewer).toHaveBeenCalledTimes(0);
    expect(formikActions.setErrors).toHaveBeenCalledTimes(0);
    expect(setGeneralError).toHaveBeenCalledTimes(1);
    expect(setGeneralError).toHaveBeenCalledWith('Unexpected error occurred!');
  });
});
