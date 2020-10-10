import React from "react";
import Main from "../shared-ui/Main";
import MainContent from "../shared-ui/MainContent";
import Block from "../shared-ui/Block";
import H1 from "../shared-ui/H1";
import Text from "../shared-ui/Text";
import StandardSpace from "../shared-ui/StandardSpace";

interface PageError500Props {
  imageSrc: string;
  link?: React.ReactNode;
}

const PageError500: React.FunctionComponent<PageError500Props> = ({ link, imageSrc }) => {
  return (
    <Main fullViewPortHeight>
      <MainContent size="xs">
        <Block size="xs">
          <H1 gutterBottom={false} style={{ fontSize: "72px" }}>
            500
          </H1>
          <Text variant="h5" align="center">
            Oops! Something went wrong.
          </Text>
          <Text variant="h5" align="center">
            Please try again later.
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

export default PageError500;
