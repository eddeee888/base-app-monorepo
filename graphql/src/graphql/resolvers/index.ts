import { Resolvers } from 'graphql/resolvers/types';
import { Query } from 'graphql/resolvers/Query';
import { User } from 'graphql/resolvers/User';
import { Mutation } from 'graphql/resolvers/Mutation';
import { File } from 'graphql/resolvers/File';

export const resolvers: Resolvers = {
  Query,
  User,
  Mutation,
  File
};
