import React from "react";
import Main from "../shared-ui/Main";
import MainContent from "../shared-ui/MainContent";
import Block from "../shared-ui/Block";
import H1 from "../shared-ui/H1";
import Text from "../shared-ui/Text";
import StandardSpace from "../shared-ui/StandardSpace";

interface PageError404Props {
  imageSrc: string;
  link?: React.ReactNode;
}

const Error404: React.FunctionComponent<PageError404Props> = ({ link, imageSrc }) => {
  return (
    <Main fullViewPortHeight>
      <MainContent size="xs">
        <Block size="xs">
          <H1 gutterBottom={false} style={{ fontSize: "72px" }}>
            404
          </H1>
          <Text variant="h3" align="center">
            What you are looking for is not available.
          </Text>
          {link}
          <StandardSpace />
          <StandardSpace />
          <img src={imageSrc} width="100%" />
        </Block>
      </MainContent>
    </Main>
  );
};

export default Error404;
