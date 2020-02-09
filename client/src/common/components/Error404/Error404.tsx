import Text from 'common/ui/Text';
import React from 'react';
import Main from 'common/ui/Main';
import Block from 'common/ui/Block';

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
