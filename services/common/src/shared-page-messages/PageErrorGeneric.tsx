import React from "react";
import Main from "../shared-ui/Main";
import MainContent from "../shared-ui/MainContent";
import Block from "../shared-ui/Block";
import Text from "../shared-ui/Text";
import StandardSpace from "../shared-ui/StandardSpace";

interface PageErrorGenericProps {
  imageSrc: string;
  link?: React.ReactNode;
}

const PageErrorGeneric: React.FunctionComponent<PageErrorGenericProps> = ({ link, imageSrc }) => {
  return (
    <Main fullViewPortHeight>
      <MainContent size="xs">
        <Block size="xs">
          <Text variant="h1" align="center">
            Looks like you are lost!
          </Text>
          <StandardSpace />
          {link}
          <StandardSpace />
          <StandardSpace />
          <img src={imageSrc} width="100%" />
        </Block>
      </MainContent>
    </Main>
  );
};

export default PageErrorGeneric;
