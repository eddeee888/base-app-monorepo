import type { QueryResolvers } from './../../../types.generated';

export const me: NonNullable<QueryResolvers['me']> = async (_parent, _arg, { viewer }) => {
  if (!viewer) {
    return { __typename: 'MeResultOk', user: null };
  }

  if (!viewer.emailVerified) {
    return { __typename: 'ResultError', error: 'FORBIDDEN_ERROR' };
  }

  return { __typename: 'MeResultOk', ok: true, user: viewer };
};
