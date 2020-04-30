import React from "react";
import Main from "common/shared-ui/Main";
import MainContent from "common/shared-ui/MainContent";
import Text from "common/shared-ui/Text";
import { NextComponentType } from "next";

const Error: NextComponentType = () => {
  return (
    <Main>
      <MainContent size="md">
        <Text align="center">Unexpected error occurred. Please try again later.</Text>
      </MainContent>
    </Main>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
