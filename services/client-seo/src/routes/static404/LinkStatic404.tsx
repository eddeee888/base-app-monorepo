/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import { UrlParamsStatic404, patternNextJSStatic404 } from "./patternStatic404";
type LinkStatic404Props = Omit<LinkProps, "nextHref"> & { urlParams?: UrlParamsStatic404 };
export const LinkStatic404: React.FunctionComponent<LinkStatic404Props> = ({ urlParams, ...props }) => {
  const query = urlParams?.query || {};
  const path = {};
  const pathname = patternNextJSStatic404;
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...props} nextHref={nextHref} />;
};
