import { QueryResolvers } from 'graphql/resolvers/types.generated';

const me: QueryResolvers['me'] = async (parent, args, { viewer }) => viewer;

export default me;
