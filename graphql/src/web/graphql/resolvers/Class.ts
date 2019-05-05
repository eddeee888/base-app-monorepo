import { ClassResolvers } from 'src/web/graphql/generated/graphqlgen';

export const Class: ClassResolvers.Type = {
  ...ClassResolvers.defaultResolvers,
  category: async ({ id }, args, { prisma }) => {
    const categories = await prisma.class({ id }).categories();
    return categories[0];
  },
  sessions: ({ id }, args, { prisma }) => prisma.class({ id }).sessions()
};
