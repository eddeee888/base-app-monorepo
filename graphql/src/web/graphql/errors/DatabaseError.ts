import { DatabaseError } from '@bit/eddeee888.base-react-app-utils.graphql';

type ThrowDatabaseErrorFn = (message?: string) => never;

export const throwDatabaseError: ThrowDatabaseErrorFn = message => {
  throw new DatabaseError({ message });
};
