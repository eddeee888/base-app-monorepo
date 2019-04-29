import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';

const createClassCategory: MutationResolvers.CreateClassCategoryResolver = async (
  parent,
  args,
  ctx
) => {
  const { name } = args.input;
  return {
    classCategory: await ctx.prisma.createClassCategory({ name })
  };
};

export default createClassCategory;
