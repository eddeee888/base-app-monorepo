import { SchemaDirectiveVisitor } from "graphql-tools";
import { ResolverContext } from "@libs/graph/types";
import { AuthenticationError } from "apollo-server-express";
import { GraphQLField, defaultFieldResolver } from "graphql";
import { IsLoggedInDirectiveArgs } from "@libs/graph/resolvers.generated";

export class IsLoggedInDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<unknown, ResolverContext>): GraphQLField<unknown, unknown> | void | null {
    const { resolve = defaultFieldResolver } = field;
    const { status } = this.args as IsLoggedInDirectiveArgs;

    field.resolve = async function (...args) {
      const { viewer } = args[2];

      if (status === true && viewer === null) {
        throw new AuthenticationError("User must be logged in");
      } else if (status === false && viewer !== null) {
        throw new AuthenticationError("User must NOT be logged in");
      }

      return await resolve.apply(this, args);
    };
  }
}
