import React from 'react';
import Main from 'common/ui/Main';
import Block from 'common/ui/Block';
import Error404 from 'common/components/Error404';

const PageNotFound: React.FunctionComponent = () => (
  <Main>
    <Block size="lg">
      <Error404 />
    </Block>
  </Main>
);

export default PageNotFound;
