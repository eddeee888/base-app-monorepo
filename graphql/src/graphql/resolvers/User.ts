import { UserResolvers } from 'graphql/generated/graphqlgen';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers
};
