import { Prisma } from "@prisma/client";

export const printHavings = (havings: Prisma.Sql[]): Prisma.Sql => {
  return havings.length > 0 ? Prisma.sql`HAVING ${Prisma.join(havings, " AND ")}` : Prisma.empty;
};
