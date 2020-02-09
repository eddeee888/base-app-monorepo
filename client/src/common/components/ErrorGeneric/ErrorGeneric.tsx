import Text from 'common/ui/Text';
import React from 'react';
import Main from 'common/ui/Main';
import Block from 'common/ui/Block';

interface ErrorGenericProps {
  fullPage?: boolean;
}

const ErrorGeneric: React.FunctionComponent<ErrorGenericProps> = ({ fullPage }) => {
  const message = 'Unexpected error occurred. Please try again later.';

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

export default ErrorGeneric;
