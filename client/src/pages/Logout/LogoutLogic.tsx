import { linkgen, Paths } from 'common/helpers/pathing';
import React, { useEffect } from 'react';
import { Redirect } from 'react-router';

interface Props {
  clearViewer: () => void;
  logout: () => void;
}

const LogoutLogic: React.FunctionComponent<Props> = ({
  clearViewer,
  logout
}) => {
  useEffect(() => {
    clearViewer();
    logout();
  }, []);

  return <Redirect to={linkgen(Paths.home)} />;
};

export default LogoutLogic;
