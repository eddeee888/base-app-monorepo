import { Resolvers } from "graphql/resolvers/types.generated";
import { Query } from "graphql/resolvers/Query";
import { User } from "graphql/resolvers/User";
import { Mutation } from "graphql/resolvers/Mutation";

export const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
};
