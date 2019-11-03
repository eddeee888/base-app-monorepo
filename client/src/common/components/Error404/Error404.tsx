import Text from 'common/components/Text';
import React from 'react';
import Main from 'common/components/Main';
import Block from 'common/components/Block';

interface Error404Props {
  fullPage?: boolean;
}

const Error404: React.FunctionComponent<Error404Props> = ({ fullPage }) => {
  const message = 'Sorry! This content is unavailable!';

  if (!!fullPage) {
    return (
      <Main>
        <Block size="md">
          <Text align="center">{message}</Text>
        </Block>
      </Main>
    );
  }

  return <Text align="center">{message}</Text>;
};

export default Error404;
