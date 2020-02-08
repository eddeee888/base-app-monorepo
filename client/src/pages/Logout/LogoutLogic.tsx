import { routes } from 'common/pathing';
import React, { useEffect } from 'react';
import { LogoutMutationFn } from './Logout.generated';

interface Props {
  clearViewer: () => void;
  logout: LogoutMutationFn;
}

const LogoutLogic: React.FunctionComponent<Props> = ({ clearViewer, logout }) => {
  useEffect(() => {
    logout().then(() => clearViewer());
  }, [logout, clearViewer]);

  window.location.replace(routes.home.generate({}));

  return null;
};

export default LogoutLogic;
