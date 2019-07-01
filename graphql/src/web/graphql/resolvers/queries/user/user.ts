import { throwDatabaseError } from 'src/web/graphql/errors';
import { QueryResolvers } from 'src/web/graphql/generated/graphqlgen';

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
