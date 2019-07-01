import { Resolvers } from 'src/web/graphql/generated/graphqlgen';
import { Mutation } from 'src/web/graphql/resolvers/Mutation';
import { Query } from 'src/web/graphql/resolvers/Query';
import { User } from 'src/web/graphql/resolvers/User';

export const resolvers: Resolvers = {
  Query,
  User,
  Mutation
};