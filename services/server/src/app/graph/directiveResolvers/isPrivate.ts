import { AuthenticationError, ValidationError } from "apollo-server-express";
import { permissions } from "@/permissions";
import { IsPrivateDirectiveResolver } from "@libs/graph/resolvers.generated";

enum AcceptableParentType {
  "User" = "User",
}

export const isPrivate: IsPrivateDirectiveResolver<unknown, any> = async (next, parent, args, { viewer }, { parentType }) => {
  if (!parent.id) {
    throw new ValidationError(`@isPrivate is used on a type without id: ${parentType}`);
  }
  if (!viewer) {
    throw new AuthenticationError("No permission to access private field");
  }

  switch (parentType.name) {
    case AcceptableParentType.User: {
      const canViewPrivateField = permissions.canUserViewUserPrivateDetails({
        viewer: viewer,
        userId: parent.id,
      });
      if (!canViewPrivateField) {
        throw new AuthenticationError("No permission to access private field");
      }
      break;
    }
    default: {
      console.error(`@isPrivate is used on an unsupported type "${parentType.name}"`);
      break;
    }
  }

  return next();
};
