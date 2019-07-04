import { Request } from 'jest-express/lib/request';
import { Response } from 'jest-express/lib/response';
import { prisma } from 'src/web/graphql/generated/prisma-client';
import login from './login';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';

describe('login()', () => {
  const email = 'bartsimpson@gmail.com';
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
    await prisma.createUser({
      email,
      firstName: 'Bart',
      lastName: 'Simpson',
      password: 'password',
      userGroup: 'user'
    });
  };

  const loginUser = async (input: MutationResolvers.LoginInput) => {
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
    ctx.utils.password.hash.mockResolvedValue('hashed_password');
    ctx.utils.password.compare.mockResolvedValue(true);

    await signupUser();
  });

  afterEach(async () => {
    await prisma.deleteManyUsers({ email });
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
      email,
      password: 'password'
    });

    if (!payload) {
      throw new Error('Payload is expected');
    }

    expect(payload).not.toBe(null);
    expect(payload.email).toBe(email);
    expect(payload.firstName).toBe('Bart');
    expect(payload.lastName).toBe('Simpson');
    expect(ctx.utils.jwt.sign).toHaveBeenCalledTimes(1);
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(1);
  });

  it('should return null if wrong email', async () => {
    expect.assertions(3);

    const payload = await loginUser({
      email: 'lisasimpson@gmail.com',
      password: 'password'
    });

    expect(payload).toBe(null);
    expect(ctx.utils.jwt.sign).toHaveBeenCalledTimes(0);
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(0);
  });

  it('should return null if wrong password', async () => {
    expect.assertions(3);

    ctx.utils.password.compare.mockResolvedValueOnce(false);

    const payload = await loginUser({
      email,
      password: 'thisisawrongpassword'
    });

    expect(payload).toBe(null);
    expect(ctx.utils.jwt.sign).toHaveBeenCalledTimes(0);
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(0);
  });

  it('should return null if no email', async () => {
    expect.assertions(3);

    const payload = await loginUser({
      email: '',
      password: 'password'
    });

    expect(payload).toBe(null);
    expect(ctx.utils.jwt.sign).toHaveBeenCalledTimes(0);
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(0);
  });

  it('should return null if no password', async () => {
    expect.assertions(3);

    ctx.utils.password.compare.mockResolvedValueOnce(false);

    const payload = await loginUser({
      email,
      password: ''
    });

    expect(payload).toBe(null);
    expect(ctx.utils.jwt.sign).toHaveBeenCalledTimes(0);
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(0);
  });

  it('should return null if SQL injection-ish', async () => {
    expect.assertions(3);

    const payload = await loginUser({
      email: `bartsimpson@gmail.com' OR 1=1`,
      password: 'password'
    });

    expect(payload).toBe(null);
    expect(ctx.utils.jwt.sign).toHaveBeenCalledTimes(0);
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(0);
  });
});
