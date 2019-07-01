import { useViewer } from 'common/components/ViewerContext';
import React from 'react';
import LogoutLogic from './LogoutLogic';
import { LogoutMutationComponent } from './Logout.generated';

const Logout: React.FunctionComponent = () => {
  const { clearViewer } = useViewer();

  return (
    <LogoutMutationComponent>
      {logout => <LogoutLogic logout={logout} clearViewer={clearViewer} />}
    </LogoutMutationComponent>
  );
};

export default Logout;
