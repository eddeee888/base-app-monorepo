import { Resolvers } from 'graphql/generated/graphqlgen';
import { Mutation } from 'graphql/resolvers/Mutation';
import { Query } from 'graphql/resolvers/Query';
import { User } from 'graphql/resolvers/User';

export const resolvers: Resolvers = {
  Query,
  User,
  Mutation
};