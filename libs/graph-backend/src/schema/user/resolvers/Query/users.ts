import type { QueryResolvers } from './../../../types.generated';

export const users: NonNullable<QueryResolvers['users']> = async (_parent, _arg, { prisma }) => {
  try {
    const users = await prisma.user.findMany();
    return { __typename: 'UsersResultOk', result: users };
  } catch (e) {
    return { __typename: 'ResultError', error: 'UNEXPECTED_ERROR' };
  }
};
