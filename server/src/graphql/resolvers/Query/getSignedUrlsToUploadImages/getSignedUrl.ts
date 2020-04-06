import { S3SignedObject } from "graphql/resolvers/types.generated";
import path = require("path");
import uuid = require("uuid/v4");
import axiosPkg = require("axios");

const axios = axiosPkg.default;

interface SignedUrl {
  url: string;
}

const getSignedUrl = async (signUrl: string, originalFilename: string): Promise<S3SignedObject> => {
  const objectFilename = `${uuid()}${path.extname(originalFilename)}`;

  try {
    const resp = await axios.post<SignedUrl>(
      signUrl,
      JSON.stringify({
        objectKey: `images/${objectFilename}`,
        originalName: originalFilename,
      }),
      {
        headers: {
          "x-api-key": process.env.AWS_S3_IMAGES_GET_SIGNED_URL_API_KEY,
        },
      }
    );
    return {
      src: process.env["AWS_S3_IMAGES_FOLDER_URL"] + "/" + objectFilename,
      filename: objectFilename,
      originalFilename,
      uploadUrl: resp.data.url,
    };
  } catch (e) {
    throw new Error(e);
  }
};

export default getSignedUrl;
