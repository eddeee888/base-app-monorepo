import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useGetSignedUrlsLazyQuery } from 'common/components/ImageUploader/useImageUploader/useImageUploader.generated';
import uploadToS3 from 'common/components/ImageUploader/uploadToS3';
import { ImageUploaderProps, SignedObject, UploadedImage, ImageUploaderHookProps } from 'common/components/ImageUploader/types';

type ImageMimeTypes = 'image/gif' | 'image/jpeg' | 'image/png';

const acceptedMimeTypes: ImageMimeTypes[] = ['image/gif', 'image/jpeg', 'image/png'];

const useImageUploader = ({ initialValues = [], onCompleted }: ImageUploaderHookProps = {}): ImageUploaderProps => {
  const [signedObjects, setSignedObjects] = useState<SignedObject[]>([]);
  const [state, setState] = useState({ error: false, loading: false });
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>(initialValues);
  const [getSignedUrls] = useGetSignedUrlsLazyQuery({
    onCompleted: data => setSignedObjects(data.getSignedUrlsToUploadImages),
    onError: () => setState({ error: true, loading: false })
  });

  const { getRootProps, getInputProps, isDragActive, acceptedFiles, rejectedFiles, open } = useDropzone({
    accept: acceptedMimeTypes,
    onDropAccepted: files => {
      setState({ error: false, loading: true });
      getSignedUrls({
        variables: {
          filenames: files.map(file => file.name)
        }
      });
    }
  });

  useEffect(() => {
    if (signedObjects.length > 0) {
      const filePromises = signedObjects.map(signedObj => {
        const fileToUpload = acceptedFiles.find(acceptedFile => acceptedFile.name === signedObj.originalFilename);

        if (!fileToUpload) {
          throw new Error('Unable to find image to upload!');
        }

        return uploadToS3(signedObj, fileToUpload);
      });

      Promise.all(filePromises)
        .then(newUploadedImages => {
          setState({ error: false, loading: false });
          setSignedObjects([]);
          setUploadedImages(newUploadedImages);
          if (onCompleted) {
            onCompleted(newUploadedImages);
          }
        })
        .catch(() => {
          throw new Error('Unable to upload images!');
        });
    }
  }, [acceptedFiles, signedObjects, onCompleted]);

  const deleteUpload = (index: number): void => {
    setUploadedImages(prevUploadedImages => {
      const newUploadedImages = prevUploadedImages.slice(0, index).concat(prevUploadedImages.slice(index + 1, prevUploadedImages.length));

      return newUploadedImages;
    });
  };

  const deleteAllUploads = (): void => {
    setUploadedImages([]);
  };

  return {
    state: {
      error: state.error,
      loading: state.loading,
      dragging: isDragActive
    },
    uploadedImages,
    rejectedFiles,
    dropzoneSetup: {
      getRootProps,
      getInputProps,
      open
    },
    deleteAllUploads,
    deleteUpload
  };
};

export default useImageUploader;
