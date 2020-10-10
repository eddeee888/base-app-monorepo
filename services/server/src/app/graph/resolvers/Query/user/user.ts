import { QueryResolvers } from "@libs/graph/resolvers.generated";
import { mustParseInt } from "@libs/utils";

const User: QueryResolvers["user"] = async (parent, { id }, { loaders }) => {
  return await loaders.user.load(mustParseInt(id));
};

export default User;
