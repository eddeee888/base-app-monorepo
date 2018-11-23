import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import ViewerContext from 'src/common/components/ViewerContext';
import { linkgen, Paths } from 'src/common/helpers/pathing';

const Logout = () => {
  const { clearViewer } = useContext(ViewerContext);

  clearViewer();

  return <Redirect to={linkgen(Paths.home)} />;
};

export default Logout;
