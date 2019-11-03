import React from 'react';
import { useViewer } from 'common/components/ViewerProvider';
import { Redirect } from 'react-router';
import { routes } from 'common/pathing';
import MeDisplay from 'pages/Me/MeDisplay';

const Me: React.FunctionComponent = () => {
  const { viewer } = useViewer();

  if (!viewer) {
    return (
      <Redirect
        to={routes.login.generate({}, { redirect: routes.me.generate({}) })}
      />
    );
  }

  return <MeDisplay viewer={viewer} />;
};

export default Me;
