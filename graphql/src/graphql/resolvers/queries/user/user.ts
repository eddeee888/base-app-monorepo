import { throwDatabaseError } from 'graphql/errors';
import { QueryResolvers } from 'graphql/generated/graphqlgen';

const User: QueryResolvers.UserResolver = async (
  parent,
  { id },
  { prisma }
) => {
  try {
    return await prisma.user({ id });
  } catch (e) {
    return throwDatabaseError();
  }
};

export default User;
