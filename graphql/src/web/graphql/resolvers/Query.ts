import { QueryResolvers } from 'src/web/graphql/generated/graphqlgen';
import classCategories from './queries/classCategories';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  classCategories,
  user: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  }
};
