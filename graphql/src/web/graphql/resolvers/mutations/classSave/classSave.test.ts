import { AuthenticationError } from '@bit/eddeee888.learnd-utils.graphql';
import { Request } from 'jest-express/lib/request';
import { Response } from 'jest-express/lib/response';
import { prisma } from 'src/web/graphql/generated/prisma-client';
import classSave from './classSave';

describe('classSave()', () => {
  const defaultCtx: any = {
    response: new Response(),
    request: new Request(),
    prisma,
    viewer: null
  };

  const save = async (input: any, ctx: any) =>
    await classSave(
      undefined,
      {
        input
      },
      ctx,
      {} as any
    );

  it('should fail if no viewer', async () => {
    await expect(save({}, { ...defaultCtx })).rejects.toThrowError(
      new AuthenticationError()
    );
  });

  it.todo('should fail if input value is invalid');
  it.todo('should fail if createClass() fails');
  it.todo('should pass if all data passed in correctly');
});
