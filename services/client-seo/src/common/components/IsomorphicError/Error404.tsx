import { FunctionComponent } from "react";
import ErrorPage from "~/pages/_error";

const Error404: FunctionComponent = () => {
  return <ErrorPage statusCode={404} />;
};

export default Error404;
