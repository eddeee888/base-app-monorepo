import { linkgen, Paths } from 'common/helpers/pathing';
import React, { useEffect } from 'react';
import { MutationFn } from 'react-apollo';
import { Redirect } from 'react-router';
import { Logout } from './__generated__/Logout';

interface Props {
  clearViewer: () => void;
  logout: MutationFn<Logout>;
}

const LogoutLogic: React.FunctionComponent<Props> = ({
  clearViewer,
  logout
}) => {
  useEffect(
    () => {
      logout().then(() => {
        clearViewer();
      });
    },
    [logout, clearViewer]
  );

  return <Redirect to={linkgen(Paths.home)} />;
};

export default LogoutLogic;
