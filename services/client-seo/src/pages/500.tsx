import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import PageError500 from "~/common/shared-page-messages/PageError500";
import Text from "~/common/shared-ui/Text";
import Anchor from "~/common/shared-ui/Anchor";
import { generateUrlHome } from "~/routes/home/generateUrlHome";
import { generateUrlClientSeoStaticImage } from "~/routes/clientSeoStaticImage/generateUrlClientSeoStaticImage";

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
