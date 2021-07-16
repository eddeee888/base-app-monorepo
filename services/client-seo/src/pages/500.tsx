import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import PageError500 from "@/shared/page-messages/PageError500";
import Text from "@/shared/ui/Text";
import Anchor from "@/shared/ui/Anchor";
import { generateUrlHome, generateUrlClientSeoStaticImage } from "@/routes";

const Custom500: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <PageError500
        imageSrc={generateUrlClientSeoStaticImage({ path: { imageName: "500.png" } })}
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

export default Custom500;
