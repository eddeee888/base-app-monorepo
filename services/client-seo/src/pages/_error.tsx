import React from "react";
import { NextComponentType, NextPageContext } from "next";
import Head from "next/head";
import PageError404 from "common/shared-page-messages/PageError404";
import PageError500 from "common/shared-page-messages/PageError500";
import PageErrorGeneric from "common/shared-page-messages/PageErrorGeneric";
import Text from "common/shared-ui/Text";
import Anchor from "common/shared-ui/Anchor";
import generateUrlHome from "routes/home/generateUrlHome";
import generateUrlClientSeoStaticImage from "routes/clientSeoStaticImage/generateUrlClientSeoStaticImage";

const ErrorPage: NextComponentType<NextPageContext, Record<string, unknown>, { statusCode: number }> = ({ statusCode }) => {
  const link = (
    <Text align="center">
      <Anchor href={generateUrlHome()}>Click here to go back to the homepage</Anchor>
    </Text>
  );

  let errorPage = <PageErrorGeneric imageSrc={generateUrlClientSeoStaticImage({ path: { imageName: "500.png" } })} link={link} />;
  switch (statusCode) {
    case 404: {
      errorPage = <PageError404 imageSrc={generateUrlClientSeoStaticImage({ path: { imageName: "404.png" } })} link={link} />;
      break;
    }
    case 500: {
      errorPage = <PageError500 imageSrc={generateUrlClientSeoStaticImage({ path: { imageName: "500.png" } })} link={link} />;
      break;
    }
  }

  return (
    <>
      <Head>
        <meta name="robots" content="noindex"></meta>
      </Head>
      {errorPage}
    </>
  );
};

export default ErrorPage;
