import { User } from "@prisma/client";
import { UserLoader } from "@libs/graph/loaders";

export const mustGetUser = async (userLoader: UserLoader, userId: number): Promise<User> => {
  const user = await userLoader.load(userId);

  if (!user) {
    throw new Error("User does not exist");
  }

  return user;
};
