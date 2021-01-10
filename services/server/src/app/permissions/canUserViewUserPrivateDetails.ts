import { User } from "@prisma/client";
import { hasGroup } from "@libs/models/user";

export interface CanUserViewUserPrivateDetails {
  viewer: User;
  userId: number;
}

const canUserViewUserPrivateDetails = (params: CanUserViewUserPrivateDetails): boolean => {
  const { viewer, userId } = params;

  if (hasGroup(viewer, "admin")) {
    return true;
  }

  if (userId === viewer.id) {
    return true;
  }

  return false;
};

export default canUserViewUserPrivateDetails;
