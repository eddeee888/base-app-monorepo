/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import { UrlParamsStatic500, patternNextJSStatic500 } from "./patternStatic500";
type LinkStatic500Props = Omit<LinkProps, "nextHref"> & { urlParams?: UrlParamsStatic500 };
export const LinkStatic500: React.FunctionComponent<LinkStatic500Props> = ({ urlParams, ...props }) => {
  const query = urlParams?.query || {};
  const path = {};
  const pathname = patternNextJSStatic500;
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...props} nextHref={nextHref} />;
};
