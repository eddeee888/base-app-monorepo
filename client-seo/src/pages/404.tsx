import React from "react";
import Text from "common/shared-ui/Text";
import Main from "common/shared-ui/Main";
import MainContent from "common/shared-ui/MainContent";

const Error404: React.FunctionComponent = () => {
  return (
    <Main fullViewPortHeight>
      <MainContent size="md">
        <Text align="center">Sorry! This content is unavailable!</Text>
      </MainContent>
    </Main>
  );
};

export default Error404;
