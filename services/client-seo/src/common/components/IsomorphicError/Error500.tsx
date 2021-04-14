import { FunctionComponent } from "react";
import ErrorPage from "~/pages/_error";

const Error500: FunctionComponent = () => {
  return <ErrorPage statusCode={500} />;
};

export default Error500;
