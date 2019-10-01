import { useViewer } from 'common/components/ViewerContext';
import React from 'react';
import LogoutLogic from './LogoutLogic';
import { useLogoutMutation } from './Logout.generated';

const Logout: React.FunctionComponent = () => {
  const { clearViewer } = useViewer();
  const [logout] = useLogoutMutation();

  return <LogoutLogic logout={logout} clearViewer={clearViewer} />;
};

export default Logout;
