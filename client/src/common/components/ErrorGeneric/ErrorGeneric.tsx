import Text from "common/shared-ui/Text";
import React from "react";
import Main from "common/shared-ui/Main";
import MainContent from "common/shared-ui/MainContent";

interface ErrorGenericProps {
  fullPage?: boolean;
}

const ErrorGeneric: React.FunctionComponent<ErrorGenericProps> = ({ fullPage }) => {
  const message = "Unexpected error occurred. Please try again later.";

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

export default ErrorGeneric;
