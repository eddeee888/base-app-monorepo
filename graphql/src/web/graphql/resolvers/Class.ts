import { ClassResolvers } from 'src/web/graphql/generated/graphqlgen';

export const Class: ClassResolvers.Type = {
  ...ClassResolvers.defaultResolvers,

  sessions: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  }
};
