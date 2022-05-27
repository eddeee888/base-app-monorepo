import { ErrorCodes } from '@bam/shared-config';
import type { QueryResolvers, UsersPayloadResolvers } from '../../../generated/resolvers.generated';

export const users: QueryResolvers['users'] = async (_parent, _arg, { prisma }) => {
  try {
    const users = await prisma.user.findMany();
    return { ok: true, result: users };
  } catch (e) {
    return { ok: false, error: ErrorCodes.UNEXPECTED_ERROR };
  }
};

export const UsersPayload: UsersPayloadResolvers = {
  __resolveType: ({ ok }) => (ok ? 'UsersResult' : 'UsersError'),
};
