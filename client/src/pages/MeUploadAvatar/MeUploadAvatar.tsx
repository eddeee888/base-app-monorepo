import React from 'react';
import { routes } from 'common/pathing';
import { Redirect } from 'react-router';
import { useViewer } from 'common/components/ViewerProvider';
import MeUploadAvatarMain from 'pages/MeUploadAvatar/MeUploadAvatarMain';

const MeUploadAvatar: React.FunctionComponent = () => {
  const { viewer, setViewerAvatar } = useViewer();

  if (!viewer) {
    return (
      <Redirect
        to={routes.login.generate(
          {},
          { redirect: routes.meUploadAvatar.generate({}) }
        )}
      />
    );
  }

  return (
    <MeUploadAvatarMain viewer={viewer} setViewerAvatar={setViewerAvatar} />
  );
};

export default MeUploadAvatar;
