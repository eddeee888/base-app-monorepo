import { FunctionComponent } from "react";
import PageErrorPage from "./PageErrorBase";

const Error500: FunctionComponent = () => {
  return <PageErrorPage statusCode={500} />;
};

export default Error500;
