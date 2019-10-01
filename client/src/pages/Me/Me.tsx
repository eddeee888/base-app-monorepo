import React from 'react';
import { useViewer } from 'common/components/ViewerContext';
import { Redirect } from 'react-router';
import { routes } from 'common/pathing';
import H1 from 'common/components/H1';
import Main from 'common/components/Main';
import Block from 'common/components/Block';

const Me: React.FunctionComponent = () => {
  const { viewer } = useViewer();

  if (!viewer) {
    return (
      <Redirect
        to={routes.login.generate({}, { redirect: routes.me.generate({}) })}
      />
    );
  }

  return (
    <Main>
      <Block size="md">
        <H1>Welcome!</H1>;
      </Block>
    </Main>
  );
};

export default Me;
