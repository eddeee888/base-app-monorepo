import {
  AuthenticationError,
  DatabaseError,
  FormValidationError
} from '@bit/eddeee888.learnd-utils.graphql';
import { Request } from 'jest-express/lib/request';
import { Response } from 'jest-express/lib/response';
import { setupTestDatabase } from 'src/helpers/tests';
import { getUserByEmail } from 'src/repositories/user';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import { prisma } from 'src/web/graphql/generated/prisma-client';
import signup from './signup';

describe('signup()', async () => {
  const validArgs: MutationResolvers.ArgsSignup = {
    input: {
      email: 'bartsimpson@gmail.com',
      firstName: 'Bart',
      lastName: 'Simpson',
      password: 'password'
    }
  };
  const graphqlResolveInfo: any = {};

  const ctx: any = {
    response: new Response(),
    request: new Request(),
    utils: {
      headers: { setTokenToResponse: jest.fn() },
      jwt: { sign: jest.fn() },
      password: { hash: jest.fn() }
    },
    prisma,
    connection: null,
    fragmentReplacements: null
  };

  beforeEach(async () => {
    await setupTestDatabase();
    ctx.utils.jwt.sign.mockReset();
    ctx.utils.headers.setTokenToResponse.mockReset();
    ctx.utils.password.hash.mockReset();

    ctx.utils.password.hash.mockResolvedValueOnce('hashed_password');
  });

  it('should create new record if valid input', async () => {
    expect.assertions(5);

    await signup(undefined, validArgs, ctx, graphqlResolveInfo);

    const savedUser = await getUserByEmail('bartsimpson@gmail.com');

    expect(savedUser.email).toEqual('bartsimpson@gmail.com');
    expect(savedUser.firstName).toEqual('Bart');
    expect(savedUser.lastName).toEqual('Simpson');
    expect(savedUser.password).toEqual('hashed_password');
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(1);
  });

  it('should throw if empty string values', async () => {
    expect.assertions(2);

    const args: MutationResolvers.ArgsSignup = {
      input: {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      }
    };

    await expect(
      signup(undefined, args, ctx, graphqlResolveInfo)
    ).rejects.toThrowError(new FormValidationError());
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(0);
  });

  it('should throw if email already exists', async () => {
    expect.assertions(2);

    await signup(undefined, validArgs, ctx, graphqlResolveInfo);

    await expect(
      signup(undefined, validArgs, ctx, graphqlResolveInfo)
    ).rejects.toThrowError(new FormValidationError());
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(1);
  });

  it('should throw if unable to connect to database to check user', async () => {
    expect.assertions(2);

    jest.spyOn(prisma, 'user').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      signup(undefined, validArgs, ctx, graphqlResolveInfo)
    ).rejects.toThrowError(
      new DatabaseError({ message: 'Unable to check user email' })
    );
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(0);
  });

  it('should throw if unable to connect to database to create user', async () => {
    expect.assertions(2);

    jest.spyOn(prisma, 'createUser').mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      signup(undefined, validArgs, ctx, graphqlResolveInfo)
    ).rejects.toThrowError(
      new DatabaseError({ message: 'Unable to create new user' })
    );
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(0);
  });

  it('should throw if unable to sign token', async () => {
    expect.assertions(2);

    ctx.utils.jwt.sign.mockImplementationOnce(() => {
      throw new Error();
    });

    await expect(
      signup(undefined, validArgs, ctx, graphqlResolveInfo)
    ).rejects.toThrowError(
      new AuthenticationError({ message: 'Unable to sign token' })
    );
    expect(ctx.utils.headers.setTokenToResponse).toHaveBeenCalledTimes(0);
  });
});
