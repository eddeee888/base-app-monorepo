import { SchemaDirectiveVisitor } from "graphql-tools";
import { ResolverContext } from "graph/types";
import { GraphQLField, defaultFieldResolver } from "graphql";
import { AuthenticationError } from "apollo-server";
import { canUserViewUserPrivateDetails } from "graph/permissions";
import mustGetUser from "models/user/mustGetUser";

enum AcceptableParentType {
  "User" = "User",
}

class IsPrivateDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, ResolverContext>): GraphQLField<any, any> | void | null {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function (...params) {
      const { id } = params[0];
      const { prisma, viewer } = params[2];
      const { parentType } = params[3];

      if (!viewer) {
        throw new AuthenticationError("No permission to access private field");
      }

      switch (parentType.name) {
        case AcceptableParentType.User:
          const user = await mustGetUser(prisma, id);
          const canViewPrivateField = await canUserViewUserPrivateDetails({ prisma, viewerId: viewer.id, userId: user.id });
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
