import { QueryResolvers } from "graph/resolvers/types.generated";

const me: QueryResolvers["me"] = async (parent, args, { viewer }) => viewer;

export default me;
