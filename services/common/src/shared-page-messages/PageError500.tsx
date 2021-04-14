import { FunctionComponent, ReactNode } from "react";
import Main from "../shared-ui/Main";
import MainContent from "../shared-ui/MainContent";
import Block from "../shared-ui/Block";
import H1 from "../shared-ui/H1";
import Text from "../shared-ui/Text";
import StandardSpace from "../shared-ui/StandardSpace";

interface PageError500Props {
  imageSrc: string;
  link?: ReactNode;
}

const PageError500: FunctionComponent<PageError500Props> = ({ link, imageSrc }) => {
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

export default PageError500;
