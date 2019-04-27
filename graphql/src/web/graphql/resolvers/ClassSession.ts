import { ClassSessionResolvers } from 'src/web/graphql/generated/graphqlgen';

export const ClassSession: ClassSessionResolvers.Type = {
  ...ClassSessionResolvers.defaultResolvers,

  day: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  }
};
