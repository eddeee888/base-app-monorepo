import { FunctionComponent } from "react";
import { PageErrorBase } from "./PageErrorBase";

export const Error404: FunctionComponent = () => {
  return <PageErrorBase statusCode={404} />;
};
