import DataLoader from "dataloader";
import { PrismaClient, User } from "@prisma/client";

export type UserLoader = DataLoader<number, User | null>;

export const createUserLoader = (prisma: PrismaClient): UserLoader => {
  return new DataLoader<number, User | null>(async (keys) => {
    const users = await prisma.user.findMany({
      where: { id: { in: [...keys] } },
    });
    const results = keys.map((key) => {
      const user = users.find((user) => user.id === key);
      return user ?? null;
    });
    return results;
  });
};
