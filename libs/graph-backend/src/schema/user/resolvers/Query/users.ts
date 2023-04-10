import { ErrorCodes } from '@bam/shared-config';
import type { QueryResolvers } from './../../../types.generated';

export const users: NonNullable<QueryResolvers['users']> = async (_parent, _arg, { prisma }) => {
  try {
    const users = await prisma.user.findMany();
    return { __typename: 'UsersResult', ok: true, result: users };
  } catch (e) {
    console.log(e);
    return { __typename: 'UsersError', ok: false, error: ErrorCodes.UNEXPECTED_ERROR };
  }
};
