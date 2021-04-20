import { NextComponentType, NextPageContext } from "next";
import PageErrorBase from "~/common/components/IsomorphicError/PageErrorBase";

const ErrorPage: NextComponentType<NextPageContext, Record<string, unknown>, { statusCode: number }> = ({ statusCode }) => {
  return <PageErrorBase statusCode={statusCode} />;
};

export default ErrorPage;
