import { routes } from 'common/pathing';
import React, { useEffect } from 'react';
import { LogoutMutationFn } from './Logout.generated';
import { ClearViewerFn } from 'common/components/ViewerProvider';

interface Props {
  clearViewer: ClearViewerFn;
  logout: LogoutMutationFn;
}

const LogoutLogic: React.FunctionComponent<Props> = ({ clearViewer, logout }) => {
  useEffect(() => {
    logout().then(() => {
      clearViewer();
      window.location.replace(routes.home.generate({}));
    });
  }, []);

  return null;
};

export default LogoutLogic;
