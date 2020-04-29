import React from "react";
import Error from "next/error";

const Error500: React.FunctionComponent = () => {
  return <Error statusCode={500} />;
};

export default Error500;
