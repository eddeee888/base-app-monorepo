/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import { UrlParamsPrivacyPolicy, patternNextJSPrivacyPolicy } from "./patternPrivacyPolicy";
type LinkPrivacyPolicyProps = Omit<LinkProps, "nextHref"> & { urlParams?: UrlParamsPrivacyPolicy };
export const LinkPrivacyPolicy: React.FunctionComponent<LinkPrivacyPolicyProps> = ({ urlParams, ...props }) => {
  const { query = {} } = urlParams;
  const path = {};
  const pathname = patternNextJSPrivacyPolicy;
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...props} nextHref={nextHref} />;
};
