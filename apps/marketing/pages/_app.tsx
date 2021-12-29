import type { ReactNode } from "react";
import { AppProps } from "next/app";
import Head from "next/head";

const CustomApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <>
      <Head>
        <title>Welcome!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
