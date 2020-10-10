import { Resolvers } from "@libs/graph/resolvers.generated";
import { Query } from "graph/resolvers/Query";
import { User } from "graph/resolvers/User";
import { Mutation } from "graph/resolvers/Mutation";

export const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
};
