import { ReactNode, FunctionComponent } from "react";
import Main from "../shared-ui/Main";
import MainContent from "../shared-ui/MainContent";
import Block from "../shared-ui/Block";
import H1 from "../shared-ui/H1";
import StandardSpace from "../shared-ui/StandardSpace";

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
            What you are looking for is not available
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
