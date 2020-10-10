import { QueryResolvers } from "@libs/graph/resolvers.generated";

const me: QueryResolvers["me"] = async (parent, args, { viewer }) => viewer;

export default me;
