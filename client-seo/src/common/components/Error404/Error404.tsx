import React from "react";
import ErrorPage from "pages/_error";

interface ErrorWithCode extends Error {
  code: string;
}

const Error404: React.FunctionComponent = () => {
  if (process.browser) {
    return <ErrorPage statusCode={404} />;
  }

  // TODO: throwing this will result in error 500 instead of 404.
  // This is a hack and might make it back in next versions or not be supported by nextjs in the future
  // https://github.com/zeit/next.js/pull/11480
  const error = new Error() as ErrorWithCode;
  error.code = "ENOENT";
  throw error;
};

export default Error404;
