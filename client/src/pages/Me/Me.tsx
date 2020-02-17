import React from 'react';
import { useViewer } from 'common/components/ViewerProvider';
import { Redirect } from 'react-router';
import Main from 'common/ui/Main';
import Block from 'common/ui/Block';
import Paper from 'common/ui/Paper';
import RouteToLogin from 'routes/RouteToLogin';
import RouteToMe from 'routes/RouteToMe';

const Me: React.FunctionComponent = () => {
  const { viewer } = useViewer();

  if (!viewer) {
    return <Redirect to={RouteToLogin.generate({}, { redirect: RouteToMe.generate({}) })} />;
  }

  return (
    <Main>
      <Block size="lg">
        <Paper>Welcome, {viewer.id}</Paper>
      </Block>
    </Main>
  );
};

export default Me;
