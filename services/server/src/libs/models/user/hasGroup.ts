import { UserGroup } from "./UserGroup";
import { User } from "@prisma/client";

const hasGroup = (user: User, groupName: UserGroup): boolean => {
  const userGroup = JSON.parse(user.userGroup);
  return !!userGroup[groupName];
};

export default hasGroup;
