import { QueryResolvers } from 'src/web/graphql/generated/graphqlgen';

const classQuery: QueryResolvers.ClassResolver = (
  parent,
  { id },
  { prisma }
) => {
  return prisma.class({ id });
};

export default classQuery;
