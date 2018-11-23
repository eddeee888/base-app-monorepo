import { AuthenticationError } from '@bit/eddeee888.learnd-utils.graphql';

type ThrowAuthenticationErrorFn = (message?: string) => never;

export const throwAuthenticationError: ThrowAuthenticationErrorFn = message => {
  throw new AuthenticationError({ message });
};
