import { ErrorResponse } from "@apollo/client/link/error";
import { ServerParseError } from "@apollo/client/link/http";
import { ServerError } from "@apollo/client/link/utils";
import { GraphQLError } from "graphql";

const createApolloError = (graphQLError?: GraphQLError, networkError?: Error | ServerError | ServerParseError): ErrorResponse => {
  return {
    graphQLErrors: graphQLError ? [graphQLError as GraphQLError] : undefined,
    networkError: networkError ? networkError : undefined,
    response: undefined,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    operation: {} as any,
    forward: jest.fn(),
  };
};

export default createApolloError;
