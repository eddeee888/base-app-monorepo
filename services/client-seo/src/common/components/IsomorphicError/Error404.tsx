import React from "react";
import ErrorPage from "pages/_error";

const Error404: React.FunctionComponent = () => {
  return <ErrorPage statusCode={404} />;
};

export default Error404;
