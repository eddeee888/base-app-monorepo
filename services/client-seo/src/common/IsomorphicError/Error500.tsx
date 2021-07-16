import { FunctionComponent } from "react";
import { PageErrorBase } from "./PageErrorBase";

export const Error500: FunctionComponent = () => {
  return <PageErrorBase statusCode={500} />;
};
