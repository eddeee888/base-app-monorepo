import { QueryResolvers } from "../types.generated";
import user from "./user";
import me from "./me";

export const Query: QueryResolvers = {
  user,
  me,
};
