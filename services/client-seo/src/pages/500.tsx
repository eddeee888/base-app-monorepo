import React from "react";
import Error from "./_error";
import { NextPage } from "next";

const Static500: NextPage = () => {
  return <Error statusCode={500} />;
};

Static500.getInitialProps = ({ res }) => {
  if (res) {
    res.statusCode = 500;
  }
  return {};
};

export default Static500;
