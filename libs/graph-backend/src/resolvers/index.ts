import type { Resolvers } from '../generated/resolvers.generated';
import { me } from './Query/me';
import { users, UsersPayload } from './Query/users';
import { UserPayload } from './UserPayload';
import { User } from './User';

export const resolvers: Resolvers = {
  Query: {
    me,
    users,
  },

  // Objects
  User,

  // Payloads
  UserPayload,
  UsersPayload,
};
