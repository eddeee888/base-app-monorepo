/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import { UrlParamsLogin, patternNextJSLogin } from "./patternLogin";
type LinkLoginProps = Omit<LinkProps, "nextHref"> & { urlParams?: UrlParamsLogin };
export const LinkLogin: React.FunctionComponent<LinkLoginProps> = ({ urlParams, ...props }) => {
  const query = urlParams?.query || {};
  const path = {};
  const pathname = patternNextJSLogin;
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...props} nextHref={nextHref} />;
};
