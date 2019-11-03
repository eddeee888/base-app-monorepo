import { DropzoneState } from 'react-dropzone';

export interface UploadedImage {
  src: string;
  originalFilename: string;
}

export interface SignedObject {
  src: string;
  filename: string;
  originalFilename: string;
  uploadUrl: string;
}

export interface ImageUploaderHookProps {
  initialValues?: UploadedImage[];
  onCompleted?: (uploadedImages: UploadedImage[]) => void;
}

export interface ImageUploaderProps {
  state: {
    error: boolean;
    loading: boolean;
    dragging: boolean;
  };
  uploadedImages: UploadedImage[];
  rejectedFiles: File[];
  dropzoneSetup: {
    getRootProps: DropzoneState['getRootProps'];
    getInputProps: DropzoneState['getInputProps'];
    open: DropzoneState['open'];
  };
  deleteAllUploads: () => void;
  deleteUpload: (index: number) => void;
}
