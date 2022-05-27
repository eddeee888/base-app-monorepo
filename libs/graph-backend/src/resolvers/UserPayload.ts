import { UserPayloadResolvers } from '../generated/resolvers.generated';

export const UserPayload: UserPayloadResolvers = {
  __resolveType: ({ ok }) => (ok ? 'UserResult' : 'UserError'),
};
