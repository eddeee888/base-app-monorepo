import { FunctionComponent, ReactNode } from "react";
import { Main, MainContent, Block, Text, StandardSpace } from "../ui";

export interface PageErrorGenericProps {
  imageSrc: string;
  link?: ReactNode;
}

export const PageErrorGeneric: FunctionComponent<PageErrorGenericProps> = ({ link, imageSrc }) => {
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
