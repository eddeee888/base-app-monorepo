import { QueryResolvers } from 'graphql/resolvers/types';
import user from 'graphql/resolvers/Query/user';
import getSignedUrlsToUploadImages from 'graphql/resolvers/Query/getSignedUrlsToUploadImages';

export const Query: QueryResolvers = {
  user,
  getSignedUrlsToUploadImages
};
