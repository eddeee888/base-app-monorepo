/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { me as Query_me } from './user/resolvers/Query/me';
import { users as Query_users } from './user/resolvers/Query/users';
import { User } from './user/resolvers/User';
import { UserError } from './user/resolvers/UserError';
import { UserPayload } from './user/resolvers/UserPayload';
import { UserResult } from './user/resolvers/UserResult';
import { UsersError } from './user/resolvers/UsersError';
import { UsersPayload } from './user/resolvers/UsersPayload';
import { UsersResult } from './user/resolvers/UsersResult';
export const resolvers: Resolvers = {
  Query: { me: Query_me, users: Query_users },

  User: User,
  UserError: UserError,
  UserPayload: UserPayload,
  UserResult: UserResult,
  UsersError: UsersError,
  UsersPayload: UsersPayload,
  UsersResult: UsersResult,
};
