import React from "react";
import Main from "../shared-ui/Main";
import MainContent from "../shared-ui/MainContent";
import Block from "../shared-ui/Block";
import H1 from "../shared-ui/H1";
import H3 from "../shared-ui/H3";
import StandardSpace from "../shared-ui/StandardSpace";

interface PageError404Props {
  imageSrc: string;
  link?: React.ReactNode;
}

const Error404: React.FunctionComponent<PageError404Props> = ({ link, imageSrc }) => {
  return (
    <Main fullViewPortHeight>
      <MainContent size="md">
        <Block size="md">
          <H1 gutterBottom={false} style={{ fontSize: "72px" }}>
            404
          </H1>
          <H3>What you are looking for is not available.</H3>
          {link}
          <StandardSpace />
          <StandardSpace />
          <img src={imageSrc} height="500" />
        </Block>
      </MainContent>
    </Main>
  );
};

export default Error404;
