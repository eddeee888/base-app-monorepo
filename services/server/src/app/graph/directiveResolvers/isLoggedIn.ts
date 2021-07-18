import { AuthenticationError } from "apollo-server-express";
import { IsLoggedInDirectiveResolver } from "@libs/graph/resolvers.generated";

export const isLoggedIn: IsLoggedInDirectiveResolver<unknown, unknown> = (next, src, { status }, { viewer }) => {
  if (status === true && viewer === null) {
    throw new AuthenticationError("User must be logged in");
  } else if (status === false && viewer !== null) {
    throw new AuthenticationError("User must NOT be logged in");
  }
  return next();
};
