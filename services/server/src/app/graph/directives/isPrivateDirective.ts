import { SchemaDirectiveVisitor } from "graphql-tools";
import { ResolverContext } from "@libs/graph/types";
import { GraphQLField, defaultFieldResolver } from "graphql";
import { AuthenticationError } from "apollo-server";
import { canUserViewUserPrivateDetails } from "graph/permissions";

enum AcceptableParentType {
  "User" = "User",
}

class IsPrivateDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, ResolverContext>): GraphQLField<any, any> | void | null {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function (...params) {
      const { id } = params[0];
      const { viewer } = params[2];
      const { parentType } = params[3];

      if (!viewer) {
        throw new AuthenticationError("No permission to access private field");
      }

      switch (parentType.name) {
        case AcceptableParentType.User:
          const canViewPrivateField = await canUserViewUserPrivateDetails({
            viewer: viewer,
            userId: id,
          });
          if (!canViewPrivateField) {
            throw new AuthenticationError("No permission to access private field");
          }
          break;
        default:
          // TODO:ERROR log an error here to report that isPrivate is used on an object that is not valid
          console.error(`@isPrivate is used on an unsupported type "${parentType.name}"`);
          break;
      }

      return await resolve.apply(this, params);
    };
  }
}

export default IsPrivateDirective;
