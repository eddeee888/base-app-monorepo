import { QueryResolvers } from "graphql/resolvers/types.generated";
import getSignedUrl from "graphql/resolvers/Query/getSignedUrlsToUploadImages/getSignedUrl";

const getSignedUrlsToUploadImages: QueryResolvers["getSignedUrlsToUploadImages"] = async (parent, { filenames }) => {
  const signUrl = process.env["AWS_S3_IMAGES_GET_SIGNED_URL"];
  if (!signUrl) {
    throw new Error("Sign URL is unavailable");
  }

  const uploadedFilePromises = Promise.all(filenames.map((filename) => getSignedUrl(signUrl, filename)));

  return await uploadedFilePromises;
};

export default getSignedUrlsToUploadImages;
