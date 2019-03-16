import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';

const createClassCategory: MutationResolvers.CreateClassCategoryResolver = async (
  parent,
  args,
  ctx
) => {
  // TODO: check that only certain users can perform this action

  const { name } = args.input;
  return {
    classCategory: await ctx.prisma.createClassCategory({ name })
  };
};

export default createClassCategory;
