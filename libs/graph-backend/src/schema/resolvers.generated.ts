/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { me as Query_me } from './user/resolvers/Query/me';
import    { users as Query_users } from './user/resolvers/Query/users';
import    { User } from './user/resolvers/User';
    export const resolvers: Resolvers = {
      Query: { me: Query_me,users: Query_users },
      
      
      User: User
    }