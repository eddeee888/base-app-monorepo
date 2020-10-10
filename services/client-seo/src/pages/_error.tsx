import React from "react";
import { NextComponentType, NextPageContext } from "next";
import PageError404 from "common/shared-page-messages/PageError404";
import PageError500 from "common/shared-page-messages/PageError500";
import Text from "common/shared-ui/Text";
import Anchor from "common/shared-ui/Anchor";
import generateUrlHome from "routes/home/generateUrlHome";
import generateUrlClientSeoStaticImage from "routes/clientSeoStaticImage/generateUrlClientSeoStaticImage";

const Error: NextComponentType<NextPageContext, Record<string, unknown>, { statusCode: number }> = ({ statusCode }) => {
  const link = (
    <Text align="center">
      <Anchor href={generateUrlHome()}>Click here to go back to the homepage</Anchor>
    </Text>
  );
  switch (statusCode) {
    case 404:
      return <PageError404 imageSrc={generateUrlClientSeoStaticImage({ path: { imageName: "404.png" } })} link={link} />;
    default:
      return <PageError500 imageSrc={generateUrlClientSeoStaticImage({ path: { imageName: "500.png" } })} link={link} />;
  }
};

export default Error;
