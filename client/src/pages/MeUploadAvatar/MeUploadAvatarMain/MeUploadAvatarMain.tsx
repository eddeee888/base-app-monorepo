import React from 'react';
import useImageUploader from 'common/components/ImageUploader/useImageUploader';
import { Viewer, SetViewerAvatarFn } from 'common/components/ViewerProvider';
import Main from 'common/components/Main';
import Block from 'common/components/Block';
import Paper from 'common/components/Paper';
import { Grid } from '@material-ui/core';
import Avatar from 'common/components/Avatar';
import Text from 'common/components/Text';
import Row from 'common/components/Row';
import Spinner from 'common/components/Spinner';
import TextError from 'common/components/TextError';
import Button from 'common/components/Button';
import { css } from 'emotion';
import { avatarExtraLargePx } from 'common/styles/size';
import { borderColor, secondaryBackgroundColor } from 'common/styles/color';
import { useUpdateMyAvatarMutation } from 'pages/MeUploadAvatar/MeUploadAvatarMain/MeUploadAvatarMain.generated';
import Link from 'common/components/Link';
import { routes } from 'common/pathing';

const avatarPlaceholderClassName = css`
  width: ${avatarExtraLargePx}px;
  height: ${avatarExtraLargePx}px;
  border: 2px dashed ${borderColor};
  background: ${secondaryBackgroundColor};
  border-radius: 50%;
`;

const avatarHeightClassName = css`
  height: ${avatarExtraLargePx}px;
`;

interface MeUploadAvatarMainProps {
  viewer: Viewer;
  setViewerAvatar: SetViewerAvatarFn;
}
const MeUploadAvatarMain: React.FunctionComponent<MeUploadAvatarMainProps> = ({
  viewer,
  setViewerAvatar
}) => {
  const {
    state,
    uploadedImages,
    rejectedFiles,
    dropzoneSetup,
    deleteAllUploads
  } = useImageUploader();
  const [updateAvatar, updateAvatarResult] = useUpdateMyAvatarMutation({
    onCompleted: data => {
      setViewerAvatar(data.userUpdate.avatar);
      deleteAllUploads();
    }
  });

  const hasUploadedImages = !!uploadedImages && uploadedImages.length > 0;
  const hasRejectedFiles = !!rejectedFiles && rejectedFiles.length > 0;

  return (
    <Main>
      <Block size="md">
        <Paper>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="center"
                className={avatarHeightClassName}
              >
                {!hasUploadedImages && (
                  <>
                    {state.loading && <Spinner />}
                    {!state.loading && (
                      <div {...dropzoneSetup.getRootProps()}>
                        <input
                          {...dropzoneSetup.getInputProps()}
                          style={{ display: 'none' }}
                        />
                        {state.dragging ? (
                          <div className={avatarPlaceholderClassName}>
                            <Grid
                              container
                              alignContent="center"
                              alignItems="center"
                              justify="center"
                              className={avatarHeightClassName}
                            >
                              <Grid item>
                                <Text>Drop image here ...</Text>
                              </Grid>
                            </Grid>
                          </div>
                        ) : (
                          <Avatar src={viewer.avatar} size="xl" />
                        )}
                      </div>
                    )}
                  </>
                )}
                {hasUploadedImages && (
                  <Avatar src={uploadedImages[0].src} size="xl" />
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Row>
                <Text>
                  A profile photo that shows your face can help learners and
                  teachers get to know you.
                </Text>
              </Row>

              {!state.loading && (
                <Grid container spacing={1} alignItems="center">
                  {!hasUploadedImages && (
                    <>
                      <Grid item>
                        <Button onClick={dropzoneSetup.open} variant="outlined">
                          Upload avatar
                        </Button>
                      </Grid>
                      <Grid item>
                        <Link to={routes.me.generate({})}>
                          <Text>Back to account</Text>
                        </Link>
                      </Grid>
                    </>
                  )}
                  {hasUploadedImages && (
                    <>
                      <Grid item>
                        <Button
                          onClick={() => {
                            updateAvatar({
                              variables: {
                                input: {
                                  id: viewer.id,
                                  avatar: uploadedImages[0].src
                                }
                              }
                            });
                          }}
                          disabled={updateAvatarResult.loading}
                          showSpinner={updateAvatarResult.loading}
                        >
                          Confirm
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          onClick={deleteAllUploads}
                          variant="outlined"
                          disabled={updateAvatarResult.loading}
                        >
                          Cancel
                        </Button>
                      </Grid>
                    </>
                  )}
                </Grid>
              )}

              {(updateAvatarResult.error || state.error) && (
                <Row marginTop={2}>
                  <TextError>
                    Unable to upload new avatar. Please try again later.
                  </TextError>
                </Row>
              )}
              {hasRejectedFiles && (
                <Row marginTop={2}>
                  <TextError>
                    Unable to upload selected image. Make sure the image is
                    JPEG, PNG or GIF
                  </TextError>
                </Row>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Block>
    </Main>
  );
};

export default MeUploadAvatarMain;
