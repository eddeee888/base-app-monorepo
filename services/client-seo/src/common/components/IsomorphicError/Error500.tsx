import React from "react";
import Head from "next/head";
import ErrorPage from "pages/_error";

const Error500: React.FunctionComponent = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <ErrorPage statusCode={500} />
    </>
  );
};

export default Error500;
