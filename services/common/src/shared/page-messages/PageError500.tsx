import { FunctionComponent, ReactNode } from "react";
import { Main, MainContent, Block, H1, Text, StandardSpace } from "../ui";

export interface PageError500Props {
  imageSrc: string;
  link?: ReactNode;
}

export const PageError500: FunctionComponent<PageError500Props> = ({ link, imageSrc }) => {
  return (
    <Main fullViewPortHeight>
      <MainContent size="xs">
        <Block size="xs">
          <H1 align="center" gutterBottom={false}>
            Oops! Something went wrong
          </H1>
          <StandardSpace />
          <Text variant="h5" align="center">
            Please try again later
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
