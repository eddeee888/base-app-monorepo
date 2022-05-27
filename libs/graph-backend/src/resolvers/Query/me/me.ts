import { ErrorCodes } from '@bam/shared-config';
import type { QueryResolvers } from '../../../generated/resolvers.generated';

export const me: QueryResolvers['me'] = async (_parent, _arg, { viewer }) => {
  if (!viewer) {
    return { ok: true, user: null };
  }

  if (!viewer.emailVerified) {
    return { ok: false, errorCode: ErrorCodes.FORBIDDEN_ERROR };
  }

  return { ok: true, user: viewer };
};
