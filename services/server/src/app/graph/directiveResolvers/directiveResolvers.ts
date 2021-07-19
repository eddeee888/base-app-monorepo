import { DirectiveResolvers } from "@libs/graph/resolvers.generated";
import { isLoggedIn } from "./isLoggedIn";
import { isPrivate } from "./isPrivate";

export const directiveResolvers: DirectiveResolvers = {
  isLoggedIn,
  isPrivate,
};
