import React from "react";
import Text from "common/shared-ui/Text";
import TextError from "common/shared-ui/TextError";
import { css } from "emotion";
import Spinner from "common/shared-ui/Spinner";
import { ImageUploaderProps } from "common/components/ImageUploader/types";
import { Grid, IconButton, Box } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { spacingRem } from "common/shared-styles/spacings";
import { borderColor, secondaryBackgroundColor } from "common/shared-styles/colors";
import StandardSpace from "common/shared-ui/StandardSpace";

const rootClassName = css`
  padding: ${spacingRem(4)}rem;
  border: 2px dashed ${borderColor};
  background: ${secondaryBackgroundColor};
  cursor: pointer;
  text-align: center;
`;

const imagePreviewClassName = css`
  max-width: 100%;
`;

const removeImageContainerClassName = css`
  text-align: right;
`;

const ImageUploader: React.FunctionComponent<ImageUploaderProps> = ({
  uploadedImages,
  rejectedFiles,
  state,
  dropzoneSetup,
  deleteUpload,
}) => {
  const hasUploadedImages = !!uploadedImages && uploadedImages.length > 0;
  const hasRejectedFiles = !!rejectedFiles && rejectedFiles.length > 0;

  return (
    <>
      {!hasUploadedImages && (
        <>
          {state.loading && (
            <div className={rootClassName}>
              <Spinner />
            </div>
          )}
          {!state.loading && (
            <div className={rootClassName} {...dropzoneSetup.getRootProps()}>
              <input {...dropzoneSetup.getInputProps()} />

              {state.dragging ? (
                <Text>Drop images here ...</Text>
              ) : (
                <Text>Drag and drop or click here to upload images. JPEG, PNG or GIF</Text>
              )}
            </div>
          )}
        </>
      )}
      {hasUploadedImages && (
        <>
          <Grid container spacing={2}>
            {uploadedImages.map(({ src, originalFilename }, uploadedImageIndex) => (
              <Grid item xs={12} sm={6} md={4} key={src}>
                <Box marginBottom={1}>
                  <Grid container justify="flex-end" alignItems="center">
                    <Grid item xs={6}>
                      <Text>{originalFilename}</Text>
                    </Grid>
                    <Grid item xs={6} className={removeImageContainerClassName}>
                      <IconButton
                        onClick={() => {
                          deleteUpload(uploadedImageIndex);
                        }}
                        aria-label="delete"
                      >
                        <Close />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
                <Grid item xs={12}>
                  <img className={imagePreviewClassName} alt="" src={src} />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </>
      )}
      {state.error && (
        <>
          <StandardSpace />
          <TextError>Unexpected problem occurred. Please try again later.</TextError>
          <StandardSpace />
        </>
      )}
      {hasRejectedFiles && (
        <>
          <StandardSpace />
          <Text>The following files failed to upload:</Text>
          {rejectedFiles.map((file) => (
            <div key={file.name}>
              <TextError>{file.name}</TextError>
            </div>
          ))}
          <StandardSpace />
        </>
      )}
    </>
  );
};

export default ImageUploader;
