import { Response } from 'jest-express/lib/response';
import logout from './logout';

describe('logout()', () => {
  const mockCtx = {
    response: new Response(),
    utils: { headers: { setTokenToResponse: jest.fn() } }
  } as any;

  afterEach(() => {
    mockCtx.utils.headers.setTokenToResponse.mockReset();
  });

  it('should return true and call setTokenToResponse to unset ', async () => {
    expect.assertions(2);

    await logout(undefined, {}, mockCtx, {} as any);

    expect(mockCtx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(1);
    expect(mockCtx.utils.headers.setTokenToResponse).toHaveBeenCalledWith(
      mockCtx.response,
      ''
    );
  });
});
