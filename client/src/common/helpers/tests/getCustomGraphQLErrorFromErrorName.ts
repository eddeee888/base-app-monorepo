import {
  AuthenticationError,
  CustomGraphQLErrors,
  DatabaseError,
  FormValidationError
} from '@bit/eddeee888.base-react-app-utils.graphql';

const getCustomGraphQLErrorFromErrorName = (
  customError: CustomGraphQLErrors
) => {
  if (CustomGraphQLErrors[customError] === 'AuthenticationError') {
    return AuthenticationError;
  } else if (CustomGraphQLErrors[customError] === 'DatabaseError') {
    return DatabaseError;
  } else if (CustomGraphQLErrors[customError] === 'FormValidationError') {
    return FormValidationError;
  }
};

export default getCustomGraphQLErrorFromErrorName;
