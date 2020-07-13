import { isApolloError, ApolloError } from "apollo-client";
import { ClientApolloError } from "./type";

function checkClientApolloError(error: ApolloError): ClientApolloError {
  const defaultResult: ClientApolloError = { code: "UNKNOWN" };

  if (isApolloError(error)) {
    if (error.networkError) {
      return {
        ...defaultResult,
        code: "NETWORK_ERROR",
      };
    } else if (error.graphQLErrors && error.graphQLErrors[0]) {
      // Only check the first error
      const graphQLError = error.graphQLErrors[0];

      const { extensions } = graphQLError;

      const result: ClientApolloError = {
        ...defaultResult,
        code: extensions && extensions.code ? extensions.code : "UNKNOWN",
        message: graphQLError.message || undefined,
      };

      // Exception would exist for "BAD_USER_INPUT"
      // If exception is NOT an empty object, we would attach all the fields to metadata
      if (
        extensions &&
        extensions.exception &&
        typeof extensions.exception === "object" &&
        Object.keys(extensions.exception).length !== 0
      ) {
        result.metadata = { ...extensions.exception };
      }

      return result;
    }
  }

  return defaultResult;
}

export default checkClientApolloError;
