import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import classSave from './mutations/classSave';
import createClassCategory from './mutations/createClassCategory';
import login from './mutations/login';
import logout from './mutations/logout';
import signup from './mutations/signup';

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  signup,
  login,
  createClassCategory,
  classSave,
  logout
};
