import { DatabaseError } from '@bit/eddeee888.base-react-app-utils.graphql';

export const throwDatabaseError = (message?: string): never => {
  throw new DatabaseError({ message });
};
