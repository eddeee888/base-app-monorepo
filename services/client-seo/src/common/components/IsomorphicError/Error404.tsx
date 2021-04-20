import { FunctionComponent } from "react";
import PageErrorPage from "./PageErrorBase";

const Error404: FunctionComponent = () => {
  return <PageErrorPage statusCode={404} />;
};

export default Error404;
