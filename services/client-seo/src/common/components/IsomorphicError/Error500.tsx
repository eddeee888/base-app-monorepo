import React from "react";
import ErrorPage from "pages/_error";

const Error500: React.FunctionComponent = () => {
  return <ErrorPage statusCode={500} />;
};

export default Error500;
