import { MutationResolvers } from 'graphql/resolvers/types.generated';
import { ForbiddenError } from 'apollo-server';
import { canUserUpdateUser } from 'graphql/permissions';
const userUpdate: MutationResolvers['userUpdate'] = async (parent, { input }, { viewer, prisma }) => {
  const canUpdate = await canUserUpdateUser(prisma, viewer.id, input.id);
  if (!canUpdate) {
    throw new ForbiddenError('User does not have permission to update details');
  }

  const updatedTargetUser = await prisma.updateUser({
    where: { id: input.id },
    data: {
      avatar: {
        upsert: !!input.avatar
          ? {
              create: {
                src: input.avatar,
                originalFilename: ''
              },
              update: {
                src: input.avatar
              }
            }
          : undefined,
        delete: !!input.avatar ? false : true
      }
    }
  });

  return { ...updatedTargetUser };
};

export default userUpdate;
