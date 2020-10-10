import { Sql } from "@prisma/client/runtime";
import { sql, join, empty } from "@prisma/client";

export const printHavings = (havings: Sql[]): Sql => {
  return havings.length > 0 ? sql`HAVING ${join(havings, " AND ")}` : empty;
};
