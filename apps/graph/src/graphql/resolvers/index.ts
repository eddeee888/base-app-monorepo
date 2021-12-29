import type { Resolvers } from "../generated/resolvers.generated";
import { user } from "./Query/user";
import { User } from "./User";

export const resolvers: Resolvers = {
  Query: { user },
  User,
};
