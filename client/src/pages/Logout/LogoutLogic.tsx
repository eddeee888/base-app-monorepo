import { routes } from 'common/helpers/pathing';
import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { LogoutMutationFn } from './Logout.generated';

interface Props {
  clearViewer: () => void;
  logout: LogoutMutationFn;
}

const LogoutLogic: React.FunctionComponent<Props> = ({
  clearViewer,
  logout
}) => {
  useEffect(() => {
    logout().then(() => {
      clearViewer();
    });
  }, [logout, clearViewer]);

  return <Redirect to={routes.home.generate({})} />;
};

export default LogoutLogic;
