import { MutationResolvers } from "@libs/graph/resolvers.generated";
import { ForbiddenError } from "apollo-server-express";
import { permissions } from "@/permissions";
import { mustParseInt } from "@libs/utils";

const userUpdate: MutationResolvers["userUpdate"] = async (parent, { input }, { viewer, prisma }) => {
  const targetUserId = mustParseInt(input.id);

  const canUpdate = await permissions.canUserUpdateUser({
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
        upsert: input.avatar
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
