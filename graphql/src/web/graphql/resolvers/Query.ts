import { QueryResolvers } from 'src/web/graphql/generated/graphqlgen';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  user: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  }
};
