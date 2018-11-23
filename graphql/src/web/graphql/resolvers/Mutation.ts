import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import login from 'src/web/graphql/resolvers/mutations/login';
import signup from 'src/web/graphql/resolvers/mutations/signup';

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  signup,
  login
};
