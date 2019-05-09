import { AuthenticationError } from '@bit/eddeee888.base-react-app-utils.graphql';

type ThrowAuthenticationErrorFn = (message?: string) => never;

export const throwAuthenticationError: ThrowAuthenticationErrorFn = message => {
  throw new AuthenticationError({ message });
};
