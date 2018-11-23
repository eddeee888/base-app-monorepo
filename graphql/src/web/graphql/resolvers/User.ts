import { UserResolvers } from 'src/web/graphql/generated/graphqlgen';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers
};
