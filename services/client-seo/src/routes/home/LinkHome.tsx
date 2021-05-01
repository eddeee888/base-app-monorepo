/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import { UrlParamsHome, patternNextJSHome } from "./patternHome";
type LinkHomeProps = Omit<LinkProps, "nextHref"> & { urlParams?: UrlParamsHome };
export const LinkHome: React.FunctionComponent<LinkHomeProps> = ({ urlParams, ...props }) => {
  const query = urlParams?.query || {};
  const path = {};
  const pathname = patternNextJSHome;
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...props} nextHref={nextHref} />;
};
