import { MutationResolvers } from "graph/resolvers/types.generated";
import login from "./login";
import signup from "./signup";
import userUpdate from "./userUpdate";

export const Mutation: MutationResolvers = {
  signup,
  login,
  userUpdate,
};
