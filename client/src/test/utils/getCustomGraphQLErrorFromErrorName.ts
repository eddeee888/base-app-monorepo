import {
  AuthenticationError,
  CustomGraphQLErrors,
  DatabaseError,
  FormValidationError
} from '@bit/eddeee888.learnd-utils.graphql';
import { ApolloError } from 'apollo-client';

const getCustomGraphQLErrorFromErrorName = (
  customError: CustomGraphQLErrors
): ApolloError | undefined => {
  if (CustomGraphQLErrors[customError] === 'AuthenticationError') {
    return AuthenticationError;
  } else if (CustomGraphQLErrors[customError] === 'DatabaseError') {
    return DatabaseError;
  } else if (CustomGraphQLErrors[customError] === 'FormValidationError') {
    return FormValidationError;
  }
};

export default getCustomGraphQLErrorFromErrorName;
