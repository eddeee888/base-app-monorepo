import React from "react";
import ErrorPage from "pages/_error";

const Error500: React.FunctionComponent = () => {
  if (process.browser) {
    return <ErrorPage statusCode={500} />;
  }
  throw new Error();
};

export default Error500;
