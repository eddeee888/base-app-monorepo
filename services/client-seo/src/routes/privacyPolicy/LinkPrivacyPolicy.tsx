/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "common/components/Link";
import { UrlPartsPrivacyPolicy, patternNextJSPrivacyPolicy } from "./patternPrivacyPolicy";
type LinkPrivacyPolicyProps = Omit<LinkProps, "nextHref"> & UrlPartsPrivacyPolicy;
const LinkPrivacyPolicy: React.FunctionComponent<LinkPrivacyPolicyProps> = (props) => {
  const { query = {}, ...rest } = props;
  const path = {};
  const pathname = patternNextJSPrivacyPolicy;
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...rest} nextHref={nextHref} />;
};
export default LinkPrivacyPolicy;
