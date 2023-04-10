import { ErrorCodes } from '@bam/shared-config';
import type { QueryResolvers } from './../../../types.generated';

export const me: QueryResolvers['me'] = async (_parent, _arg, { viewer }) => {
  if (!viewer) {
    return { __typename: 'UserResult', user: null };
  }

  if (!viewer.emailVerified) {
    return { __typename: 'PayloadError', error: ErrorCodes.FORBIDDEN_ERROR };
  }

  return { __typename: 'UserResult', ok: true, user: viewer };
};
