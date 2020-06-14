import login from "./login";
import logout from "./logout";
import signup from "./signup";
import userUpdate from "./userUpdate";
import { MutationResolvers } from "graphql/resolvers/types.generated";

export const Mutation: MutationResolvers = {
  signup,
  login,
  logout,
  userUpdate,
};
