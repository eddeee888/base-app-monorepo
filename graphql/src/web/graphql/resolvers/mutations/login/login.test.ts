import { Request } from 'jest-express/lib/request';
import { Response } from 'jest-express/lib/response';
import { setupTestDatabase } from 'src/helpers/tests';
import { prisma } from 'src/web/graphql/generated/prisma-client';
import signup from '../signup';
import login from './login';

describe('login()', () => {
  const ctx: any = {
    response: new Response(),
    request: new Request(),
    prisma,
    utils: {
      headers: { setTokenToResponse: jest.fn() },
      jwt: { sign: jest.fn() },
      password: {
        compare: jest.fn(),
        hash: jest.fn()
      }
    }
  };

  const signupUser = async () => {
    await signup(
      undefined,
      {
        input: {
          email: 'bartsimpson@gmail.com',
          firstName: 'Bart',
          lastName: 'Simpson',
          password: 'password'
        }
      },
      ctx,
      {} as any
    );
  };

  const loginUser = async (input: any) => {
    return await login(
      undefined,
      {
        input
      },
      ctx,
      {} as any
    );
  };

  beforeEach(async () => {
    await setupTestDatabase();

    ctx.utils.password.hash.mockResolvedValue('hashed_password');
    ctx.utils.password.compare.mockResolvedValue(true);

    await signupUser();
  });

  afterEach(() => {
    ctx.utils.jwt.sign.mockReset();
    ctx.utils.headers.setTokenToResponse.mockReset();
    ctx.utils.password.compare.mockReset();
    ctx.utils.password.hash.mockReset();
  });

  it('should return user if correct credentials', async () => {
    expect.assertions(6);

    const payload = await loginUser({
      email: 'bartsimpson@gmail.com',
      password: 'password'
    });

    expect(payload).not.toBe(null);
    expect(payload!.user.email).toBe('bartsimpson@gmail.com');
    expect(payload!.user.firstName).toBe('Bart');
    expect(payload!.user.lastName).toBe('Simpson');
    expect(ctx.utils.jwt.sign).toHaveBeenCalledTimes(2);
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(2);
  });

  it('should return null if wrong email', async () => {
    expect.assertions(3);

    const payload = await loginUser({
      email: 'lisasimpson@gmail.com',
      password: 'password'
    });

    expect(payload).toBe(null);
    expect(ctx.utils.jwt.sign).toHaveBeenCalledTimes(1);
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(1);
  });

  it('should return null if wrong password', async () => {
    expect.assertions(3);

    ctx.utils.password.compare.mockResolvedValueOnce(false);

    const payload = await loginUser({
      email: 'bartsimpson@gmail.com',
      password: 'thisisawrongpassword'
    });

    expect(payload).toBe(null);
    expect(ctx.utils.jwt.sign).toHaveBeenCalledTimes(1);
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(1);
  });

  it('should return null if no email', async () => {
    expect.assertions(3);

    const payload = await loginUser({
      email: '',
      password: 'password'
    });

    expect(payload).toBe(null);
    expect(ctx.utils.jwt.sign).toHaveBeenCalledTimes(1);
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(1);
  });

  it('should return null if no password', async () => {
    expect.assertions(3);

    ctx.utils.password.compare.mockResolvedValueOnce(false);

    const payload = await loginUser({
      email: 'bartsimpson@gmail.com',
      password: ''
    });

    expect(payload).toBe(null);
    expect(ctx.utils.jwt.sign).toHaveBeenCalledTimes(1);
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(1);
  });

  it('should return null if SQL injection-ish', async () => {
    expect.assertions(3);

    const payload = await loginUser({
      email: `bartsimpson@gmail.com' OR 1=1`,
      password: 'password'
    });

    expect(payload).toBe(null);
    expect(ctx.utils.jwt.sign).toHaveBeenCalledTimes(1);
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(1);
  });
});
