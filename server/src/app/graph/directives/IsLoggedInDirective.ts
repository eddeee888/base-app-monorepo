import { SchemaDirectiveVisitor } from "graphql-tools";
import { ResolverContext } from "graph/types";
import { AuthenticationError } from "apollo-server";
import { GraphQLField, defaultFieldResolver } from "graphql";

class IsLoggedInDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, ResolverContext>): GraphQLField<any, any> | void | null {
    const { resolve = defaultFieldResolver } = field;
    const { status } = this.args;

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

export default IsLoggedInDirective;
