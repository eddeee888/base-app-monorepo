import { Resolvers } from 'src/web/graphql/generated/graphqlgen';

import { ClassCategory } from 'src/web/graphql/resolvers/ClassCategory';
import { CreateClassCategoryPayload } from 'src/web/graphql/resolvers/CreateClassCategoryPayload';
import { LoginPayload } from 'src/web/graphql/resolvers/LoginPayload';
import { Mutation } from 'src/web/graphql/resolvers/Mutation';
import { Query } from 'src/web/graphql/resolvers/Query';
import { SignupPayload } from 'src/web/graphql/resolvers/SignupPayload';
import { User } from 'src/web/graphql/resolvers/User';

export const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  ClassCategory,
  SignupPayload,
  LoginPayload,
  CreateClassCategoryPayload
};
