import createHandleLoginFn from './createHandleLoginFn';

describe('createHandleSubmitFunction()', () => {
  const loginMutation = jest.fn();
  const setViewer = jest.fn();
  const setGeneralError = jest.fn();
  const input = {
    email: 'user@gmail.com',
    password: 'password'
  } as any;
  const formikActions = {} as any;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('result function should set logged in user if mutation returns valid', async () => {
    expect.assertions(5);

    loginMutation.mockResolvedValueOnce({
      data: {
        login: {
          id: '100'
        }
      }
    });

    const fn = createHandleLoginFn(loginMutation, setViewer, setGeneralError);

    await fn(input, formikActions);

    expect(loginMutation).toHaveBeenCalledTimes(1);
    expect(loginMutation).toHaveBeenCalledWith({
      variables: { input }
    });
    expect(setViewer).toHaveBeenCalledTimes(1);
    expect(setViewer).toHaveBeenCalledWith({
      id: '100'
    });
    expect(setGeneralError).toHaveBeenCalledTimes(0);
  });

  it('result function should NOT set logged in user if mutation returns nothing', async () => {
    expect.assertions(5);
    loginMutation.mockResolvedValueOnce({
      data: {
        login: null
      }
    });

    const fn = createHandleLoginFn(loginMutation, setViewer, setGeneralError);

    await fn(input, formikActions);

    expect(loginMutation).toHaveBeenCalledTimes(1);
    expect(loginMutation).toHaveBeenCalledWith({
      variables: { input }
    });
    expect(setViewer).toHaveBeenCalledTimes(0);
    expect(setGeneralError).toHaveBeenCalledTimes(1);
    expect(setGeneralError).toHaveBeenCalledWith('The email/password combination you entered is incorrect.');
  });

  it('result function should fail and show error if mutation throws error', async () => {
    expect.assertions(5);

    loginMutation.mockRejectedValueOnce('Mutation error');

    const fn = createHandleLoginFn(loginMutation, setViewer, setGeneralError);

    await fn(input, formikActions);

    expect(loginMutation).toHaveBeenCalledTimes(1);
    expect(loginMutation).toHaveBeenCalledWith({
      variables: { input: { email: 'user@gmail.com', password: 'password' } }
    });
    expect(setViewer).toHaveBeenCalledTimes(0);
    expect(setGeneralError).toHaveBeenCalledTimes(1);
    expect(setGeneralError).toHaveBeenCalledWith('Unexpected error occurred.');
  });
});
