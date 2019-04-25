import ViewerContext from 'common/components/ViewerContext';
import { linkgen, Paths } from 'common/helpers/pathing';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';

const Logout = () => {
  const { clearViewer } = useContext(ViewerContext);

  clearViewer();

  return <Redirect to={linkgen(Paths.home)} />;
};

export default Logout;
