import React from 'react';
import { useViewer } from 'common/components/ViewerProvider';
import { Redirect } from 'react-router';
import { routes } from 'common/pathing';
import Main from 'common/ui/Main';
import Block from 'common/ui/Block';
import Paper from 'common/ui/Paper';

const Me: React.FunctionComponent = () => {
  const { viewer } = useViewer();

  if (!viewer) {
    return <Redirect to={routes.login.generate({}, { redirect: routes.me.generate({}) })} />;
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
