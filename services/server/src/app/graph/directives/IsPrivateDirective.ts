import { SchemaDirectiveVisitor } from "graphql-tools";
import { ResolverContext } from "@libs/graph/types";
import { GraphQLField, defaultFieldResolver } from "graphql";
import { AuthenticationError } from "apollo-server-express";
import { permissions } from "@/permissions";

enum AcceptableParentType {
  "User" = "User",
}

export class IsPrivateDirective extends SchemaDirectiveVisitor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public visitFieldDefinition(field: GraphQLField<any, ResolverContext>): GraphQLField<unknown, unknown> | void | null {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function (...params) {
      const { id } = params[0];
      const { viewer } = params[2];
      const { parentType } = params[3];

      if (!viewer) {
        throw new AuthenticationError("No permission to access private field");
      }

      switch (parentType.name) {
        case AcceptableParentType.User: {
          const canViewPrivateField = await permissions.canUserViewUserPrivateDetails({
            viewer: viewer,
            userId: id,
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

      return await resolve.apply(this, params);
    };
  }
}
