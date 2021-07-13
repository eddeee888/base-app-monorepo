import { FunctionComponent, ReactNode } from "react";
import Main from "../ui/Main";
import MainContent from "../ui/MainContent";
import Block from "../ui/Block";
import Text from "../ui/Text";
import StandardSpace from "../ui/StandardSpace";

interface PageErrorGenericProps {
  imageSrc: string;
  link?: ReactNode;
}

const PageErrorGeneric: FunctionComponent<PageErrorGenericProps> = ({ link, imageSrc }) => {
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
