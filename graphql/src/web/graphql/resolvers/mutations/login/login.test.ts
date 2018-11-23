import { Request } from 'jest-express/lib/request';
import { Response } from 'jest-express/lib/response';
import { setupTestDatabase } from 'src/helpers/tests';
import { prisma } from 'src/web/graphql/generated/prisma-client';
import signup from '../signup';
import login from './login';

describe('login()', () => {
  const graphqlResolveInfo: any = {};

  const response = new Response();

  const ctx: any = {
    response,
    request: new Request(),
    prisma,
    connection: null,
    fragmentReplacements: null
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
      graphqlResolveInfo
    );
  };

  const loginUser = async (input: any) => {
    return await login(
      undefined,
      {
        input
      },
      ctx,
      graphqlResolveInfo
    );
  };

  beforeEach(async () => {
    await setupTestDatabase();
    await signupUser();
    response.resetMocked();
  });

  it('should return user if correct credentials', async () => {
    expect.assertions(5);

    const payload = await loginUser({
      email: 'bartsimpson@gmail.com',
      password: 'password'
    });

    expect(payload).not.toBe(null);
    expect(payload!.user.email).toBe('bartsimpson@gmail.com');
    expect(payload!.user.firstName).toBe('Bart');
    expect(payload!.user.lastName).toBe('Simpson');
    expect(response.cookie).toHaveBeenCalledTimes(1);
  });

  it('should return null if wrong email', async () => {
    expect.assertions(2);

    const payload = await loginUser({
      email: 'lisasimpson@gmail.com',
      password: 'password'
    });

    expect(payload).toBe(null);
    expect(response.cookie).toHaveBeenCalledTimes(0);
  });

  it('should return null if wrong password', async () => {
    expect.assertions(2);

    const payload = await loginUser({
      email: 'bartsimpson@gmail.com',
      password: 'thisisawrongpassword'
    });

    expect(payload).toBe(null);
    expect(response.cookie).toHaveBeenCalledTimes(0);
  });

  it('should return null if no email', async () => {
    expect.assertions(2);

    const payload = await loginUser({
      email: '',
      password: 'password'
    });

    expect(payload).toBe(null);
    expect(response.cookie).toHaveBeenCalledTimes(0);
  });

  it('should return null if no password', async () => {
    expect.assertions(2);

    const payload = await loginUser({
      email: 'bartsimpson@gmail.com',
      password: ''
    });

    expect(payload).toBe(null);
    expect(response.cookie).toHaveBeenCalledTimes(0);
  });

  it('should return null if SQL injection-ish', async () => {
    expect.assertions(2);

    const payload = await loginUser({
      email: `bartsimpson@gmail.com' OR 1=1`,
      password: 'password'
    });

    expect(payload).toBe(null);
    expect(response.cookie).toHaveBeenCalledTimes(0);
  });
});
