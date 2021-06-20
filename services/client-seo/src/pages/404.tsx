import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import PageError404 from "~/common/shared-page-messages/PageError404";
import Text from "~/common/shared-ui/Text";
import Anchor from "~/common/shared-ui/Anchor";
import { generateUrlHome, generateUrlClientSeoStaticImage } from "~/routes";

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <PageError404
        imageSrc={generateUrlClientSeoStaticImage({ path: { imageName: "404.png" } })}
        link={
          <Text align="center">
            <Anchor href={generateUrlHome()}>Click here to go back to the homepage</Anchor>
          </Text>
        }
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      isStaticStatusPage: true,
    },
  };
};

export default Custom404;
