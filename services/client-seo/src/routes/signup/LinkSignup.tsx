/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import { UrlParamsSignup, patternNextJSSignup } from "./patternSignup";
type LinkSignupProps = Omit<LinkProps, "nextHref"> & { urlParams?: UrlParamsSignup };
export const LinkSignup: React.FunctionComponent<LinkSignupProps> = ({ urlParams, ...props }) => {
  const { query = {} } = urlParams;
  const path = {};
  const pathname = patternNextJSSignup;
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...props} nextHref={nextHref} />;
};
