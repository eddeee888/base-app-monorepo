import { FormValidationError } from '@bit/eddeee888.base-react-app-utils.graphql';

export const throwPermissionError = (message?: string): never => {
  throw new FormValidationError({
    message: message ? message : 'Permission denied.'
  });
};
