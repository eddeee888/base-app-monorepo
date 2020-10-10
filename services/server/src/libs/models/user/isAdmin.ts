import hasGroup from "@libs/models/user/hasGroup";
import { UserLoader } from "@libs/graph/loaders";

const isAdmin = async (userLoader: UserLoader, userId: number): Promise<boolean> => {
  const user = await userLoader.load(userId);
  if (!!user && hasGroup(user, "admin")) {
    return true;
  }
  return false;
};

export default isAdmin;
