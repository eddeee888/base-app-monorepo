import { QueryResolvers } from 'src/web/graphql/generated/graphqlgen';
import classCategories from './queries/classCategories';
import classQuery from './queries/classQuery';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  classCategories,
  class: classQuery,
  user: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  }
};
