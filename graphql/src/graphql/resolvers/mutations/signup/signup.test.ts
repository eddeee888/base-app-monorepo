import {
  AuthenticationError,
  DatabaseError,
  FormValidationError
} from '@bit/eddeee888.base-react-app-utils.graphql';
import { Request } from 'jest-express/lib/request';
import { Response } from 'jest-express/lib/response';
import { MutationResolvers } from 'graphql/generated/graphqlgen';
import { prisma } from 'prisma/generated/client';
import signup from './signup';

describe('signup()', () => {
  const email = 'bartsimpson@gmail.com';

  const validArgs: MutationResolvers.ArgsSignup = {
    input: {
      email,
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
    ctx.utils.jwt.sign.mockReset();
    ctx.utils.headers.setTokenToResponse.mockReset();
    ctx.utils.password.hash.mockReset();

    ctx.utils.password.hash.mockResolvedValueOnce('hashed_password');
  });

  afterEach(async () => {
    await prisma.deleteManyUsers({ email });
  });

  it('should create new record if valid input', async () => {
    expect.assertions(6);

    await signup(undefined, validArgs, ctx, graphqlResolveInfo);

    const savedUser = await prisma.user({ email });

    if (!savedUser) {
      throw new Error('No saved user');
    }

    expect(savedUser).not.toBe(null);
    expect(savedUser.email).toEqual(email);
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
