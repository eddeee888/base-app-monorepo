import { MutationResolvers } from "@libs/graph/resolvers.generated";
import userUpdate from "./userUpdate";

export const Mutation: MutationResolvers = {
  userUpdate,
};
