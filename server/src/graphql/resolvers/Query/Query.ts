import { QueryResolvers } from "graphql/resolvers/types.generated";
import user from "graphql/resolvers/Query/user";
import getSignedUrlsToUploadImages from "graphql/resolvers/Query/getSignedUrlsToUploadImages";
import me from "graphql/resolvers/Query/me";

export const Query: QueryResolvers = {
  user,
  getSignedUrlsToUploadImages,
  me,
};
