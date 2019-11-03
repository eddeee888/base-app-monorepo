import { S3SignedObject } from 'graphql/resolvers/types';
import request = require('request');
import path = require('path');
import uuid = require('uuid/v4');

interface SignedUrl {
  url: string;
}

const getSignedUrl = async (
  signUrl: string,
  originalFilename: string
): Promise<S3SignedObject> => {
  const objectFilename = `${uuid()}${path.extname(originalFilename)}`;

  const signedPromise = new Promise<SignedUrl>((resolve, reject) => {
    request.post(
      signUrl,
      {
        headers: {
          'x-api-key': process.env.AWS_S3_IMAGES_GET_SIGNED_URL_API_KEY
        },
        body: JSON.stringify({
          objectKey: `images/${objectFilename}`,
          originalName: originalFilename
        })
      },
      (error, response) => {
        if (response.statusCode === 200) {
          resolve(JSON.parse(response.body) as SignedUrl);
        } else {
          reject(new Error(error));
        }
      }
    );
  });

  const signedUrl = await signedPromise;

  return {
    src: process.env['AWS_S3_IMAGES_FOLDER_URL'] + '/' + objectFilename,
    filename: objectFilename,
    originalFilename,
    uploadUrl: signedUrl.url
  };
};

export default getSignedUrl;
