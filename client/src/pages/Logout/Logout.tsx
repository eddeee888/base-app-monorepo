import ViewerContext from 'common/components/ViewerContext';
import gql from 'graphql-tag';
import React, { useContext } from 'react';
import { Mutation } from 'react-apollo';
import { Logout as LogoutData } from './__generated__/Logout';
import LogoutLogic from './LogoutLogic';

const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

const Logout: React.FunctionComponent = () => {
  const { clearViewer } = useContext(ViewerContext);

  return (
    <Mutation<LogoutData> mutation={LOGOUT}>
      {logout => <LogoutLogic logout={logout} clearViewer={clearViewer} />}
    </Mutation>
  );
};

export default Logout;
