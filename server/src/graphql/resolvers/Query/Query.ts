import { QueryResolvers } from 'graphql/resolvers/types.generated';
import user from 'graphql/resolvers/Query/user';
import getSignedUrlsToUploadImages from 'graphql/resolvers/Query/getSignedUrlsToUploadImages';

export const Query: QueryResolvers = {
  user,
  getSignedUrlsToUploadImages
};