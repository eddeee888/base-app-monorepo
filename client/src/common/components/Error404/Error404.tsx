import Text from "common/shared-ui/Text";
import React from "react";
import Main from "common/shared-ui/Main";
import MainContent from "common/shared-ui/MainContent";

interface Error404Props {
  fullPage?: boolean;
}

const Error404: React.FunctionComponent<Error404Props> = ({ fullPage }) => {
  const message = "Sorry! This content is unavailable!";

  if (!!fullPage) {
    return (
      <Main>
        <MainContent size="md">
          <Text align="center">{message}</Text>
        </MainContent>
      </Main>
    );
  }

  return <Text align="center">{message}</Text>;
};

export default Error404;
