/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import { UrlParamsTermAndConditions, patternNextJSTermAndConditions } from "./patternTermAndConditions";
type LinkTermAndConditionsProps = Omit<LinkProps, "nextHref"> & { urlParams?: UrlParamsTermAndConditions };
export const LinkTermAndConditions: React.FunctionComponent<LinkTermAndConditionsProps> = ({ urlParams, ...props }) => {
  const { query = {} } = urlParams;
  const path = {};
  const pathname = patternNextJSTermAndConditions;
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...props} nextHref={nextHref} />;
};
