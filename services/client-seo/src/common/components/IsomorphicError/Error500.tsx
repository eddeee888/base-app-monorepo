import React from "react";
import ErrorPage from "pages/_error";
import { ErrorWithCode } from "./types";

const Error500: React.FunctionComponent = () => {
  if (process.browser) {
    return <ErrorPage statusCode={500} />;
  }
  const error = new Error() as ErrorWithCode;
  error.code = 500;
  throw error;
};

export default Error500;
