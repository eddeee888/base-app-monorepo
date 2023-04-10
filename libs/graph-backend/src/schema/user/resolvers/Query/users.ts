import { ErrorCodes } from '@bam/shared-config';
import type { QueryResolvers } from './../../../types.generated';

export const users: NonNullable<QueryResolvers['users']> = async (_parent, _arg, { prisma }) => {
  try {
    const users = await prisma.user.findMany();
    return { __typename: 'UsersResult', result: users };
  } catch (e) {
    console.log(e);
    return { __typename: 'PayloadError', error: ErrorCodes.UNEXPECTED_ERROR };
  }
};
