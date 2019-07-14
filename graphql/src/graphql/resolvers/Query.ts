import { QueryResolvers } from 'graphql/generated/graphqlgen';
import user from './queries/user';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  user
};
