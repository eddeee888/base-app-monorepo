import { MutationResolvers } from "graphql/resolvers/types.generated";
import { ForbiddenError } from "apollo-server";
import { canUserUpdateUser } from "graphql/permissions";

const userUpdate: MutationResolvers["userUpdate"] = async (parent, { input }, { viewer, prisma }) => {
  const targetUserId = parseInt(input.id);

  const canUpdate = await canUserUpdateUser({
    prisma,
    userId: viewer.id,
    targetUserId: targetUserId,
  });
  if (!canUpdate) {
    throw new ForbiddenError("User does not have permission to update details");
  }

  const updatedTargetUser = await prisma.user.update({
    where: { id: targetUserId },
    data: {
      avatar: {
        upsert: !!input.avatar
          ? {
              create: {
                src: input.avatar,
                originalFilename: "",
              },
              update: {
                src: input.avatar,
              },
            }
          : undefined,
        delete: input.avatar === null ? true : false,
      },
    },
  });

  return { ...updatedTargetUser };
};

export default userUpdate;
