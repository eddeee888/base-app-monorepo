import {
  SignedObject,
  UploadedImage
} from 'common/components/ImageUploader/types';

const uploadToS3 = async (
  signedObj: SignedObject,
  file: File
): Promise<UploadedImage> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedObj.uploadUrl, true);
    xhr.send(file);
    xhr.onload = function() {
      this.status === 200
        ? resolve({
            src: signedObj.src,
            originalFilename: signedObj.originalFilename
          })
        : reject(this.responseText);
    };
  });
};

export default uploadToS3;
