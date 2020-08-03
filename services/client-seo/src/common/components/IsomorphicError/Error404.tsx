import React from "react";
import ErrorPage from "pages/_error";
import { ErrorWithCode } from "./types";

const Error404: React.FunctionComponent = () => {
  if (process.browser) {
    return <ErrorPage statusCode={404} />;
  }
  const error = new Error() as ErrorWithCode;
  error.code = 404;
  throw error;
};

export default Error404;
