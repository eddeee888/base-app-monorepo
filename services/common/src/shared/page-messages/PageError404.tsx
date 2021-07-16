import { ReactNode, FunctionComponent } from "react";
import { Main, MainContent, Block, H1, StandardSpace } from "../ui";

interface PageError404Props {
  imageSrc: string;
  link?: ReactNode;
}

const Error404: FunctionComponent<PageError404Props> = ({ link, imageSrc }) => {
  return (
    <Main fullViewPortHeight>
      <MainContent size="xs">
        <Block size="xs">
          <H1 gutterBottom={false} align="center">
            Oops! What you are looking for is not available
          </H1>
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
