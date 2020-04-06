import login from "graphql/resolvers/Mutation/login";
import logout from "graphql/resolvers/Mutation/logout";
import signup from "graphql/resolvers/Mutation/signup";
import userUpdate from "graphql/resolvers/Mutation/userUpdate";
import { MutationResolvers } from "graphql/resolvers/types.generated";

export const Mutation: MutationResolvers = {
  signup,
  login,
  logout,
  userUpdate,
};
