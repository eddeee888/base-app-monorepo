/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import Link, { LinkProps } from "common/components/Link";
import { patternPrivacyPolicy, UrlPartsPrivacyPolicy, patternNextJSPrivacyPolicy } from "./patternPrivacyPolicy";
type LinkPrivacyPolicyProps = Omit<LinkProps, "href"> & UrlPartsPrivacyPolicy;
const LinkPrivacyPolicy: React.FunctionComponent<LinkPrivacyPolicyProps> = ({ urlQuery, origin, ...props }) => {
  const to = generateUrl(patternPrivacyPolicy, {}, urlQuery, origin);
  return <Link {...props} href={patternNextJSPrivacyPolicy} as={to} />;
};
export default LinkPrivacyPolicy;
