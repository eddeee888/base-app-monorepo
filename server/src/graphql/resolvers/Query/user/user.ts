import { QueryResolvers } from 'graphql/resolvers/types';

const User: QueryResolvers['user'] = async (parent, { id }, { prisma }) => {
  return await prisma.user({ id });
};

export default User;
