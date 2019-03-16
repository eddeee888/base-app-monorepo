import { QueryResolvers } from 'src/web/graphql/generated/graphqlgen';

const classCategories: QueryResolvers.ClassCategoriesResolver = async (
  parent,
  args,
  ctx
) => {
  return await ctx.prisma.classCategories();
};

export default classCategories;
