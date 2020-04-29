import React from "react";
import Error from "next/error";

const Error404: React.FunctionComponent = () => {
  return <Error statusCode={404} />;
};

export default Error404;
