import React from "react";
import Error from "./_error";

const Static404: React.FunctionComponent = () => {
  return <Error statusCode={404} />;
};

export default Static404;
