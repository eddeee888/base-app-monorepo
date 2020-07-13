import React from "react";
import Main from "../shared-ui/Main";
import MainContent from "../shared-ui/MainContent";
import Block from "../shared-ui/Block";
import H1 from "../shared-ui/H1";
import H3 from "../shared-ui/H3";
import StandardSpace from "../shared-ui/StandardSpace";

interface PageError500Props {
  imageSrc: string;
  link?: React.ReactNode;
}

const PageError500: React.FunctionComponent<PageError500Props> = ({ link, imageSrc }) => {
  return (
    <Main fullViewPortHeight>
      <MainContent size="md">
        <Block size="md">
          <H1 gutterBottom={false} style={{ fontSize: "72px" }}>
            500
          </H1>
          <H3>We are unable to handle your request at the moment.</H3>
          <H3>Please try again later.</H3>
          {link}
          <StandardSpace />
          <StandardSpace />
          <img src={imageSrc} height="500" />
        </Block>
      </MainContent>
    </Main>
  );
};

export default PageError500;
