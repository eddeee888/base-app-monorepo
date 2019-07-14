import { AuthenticationError } from '@bit/eddeee888.base-react-app-utils.graphql';

export const throwAuthenticationError = (message?: string): never => {
  throw new AuthenticationError({ message });
};
