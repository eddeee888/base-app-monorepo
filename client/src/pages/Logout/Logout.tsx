import { useViewer } from 'common/components/ViewerContext';
import React from 'react';
import LogoutLogic from './LogoutLogic';
import { LogoutComponent } from './Logout.generated';

const Logout: React.FunctionComponent = () => {
  const { clearViewer } = useViewer();

  return (
    <LogoutComponent>
      {logout => <LogoutLogic logout={logout} clearViewer={clearViewer} />}
    </LogoutComponent>
  );
};

export default Logout;
