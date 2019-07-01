import { QueryResolvers } from 'src/web/graphql/generated/graphqlgen';
import user from './queries/user';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  user
};
