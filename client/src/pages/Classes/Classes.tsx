import Block from 'common/components/Block';
import H1 from 'common/components/H1';
import Main from 'common/components/Main';
import React from 'react';

interface Props {
  name: string;
}

const Classes: React.FunctionComponent<Props> = ({ name }) => (
  <Main>
    <Block size="md">
      <H1>{name}</H1>
    </Block>
  </Main>
);

export default Classes;
