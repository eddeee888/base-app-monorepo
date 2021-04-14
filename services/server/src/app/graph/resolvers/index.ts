import { Resolvers } from "@libs/graph/resolvers.generated";
import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { User } from "./User";

export const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
};
