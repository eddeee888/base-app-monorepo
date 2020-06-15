import { PrismaClient } from "@prisma/client";
import { isAdmin } from "models/user";

interface CanUserViewUserPrivateDetails {
  prisma: PrismaClient;
  viewerId: number;
  userId: number;
}

export const canUserViewUserPrivateDetails = async (params: CanUserViewUserPrivateDetails): Promise<boolean> => {
  const { prisma, viewerId, userId } = params;
  if (viewerId === userId) {
    return true;
  }

  const isViewerAdmin = await isAdmin(prisma, viewerId);
  if (isViewerAdmin) {
    return true;
  }

  return false;
};
