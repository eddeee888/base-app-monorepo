import React from 'react';
import Header from '../src/common/components/Header';
import Main from '../src/common/ui/Main';
import Block from '../src/common/ui/Block';

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Main>
        <Block size="lg">
          <h1>Welcome!</h1>
        </Block>
      </Main>
    </>
  );
};

export default Home;
