import Error from "./_error";
import { NextPage } from "next";

const Static500: NextPage = () => {
  return <Error statusCode={500} />;
};

export default Static500;
