/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { LinkProps, Link as Link } from "@/common";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsPrivacyPolicy, patternPrivacyPolicy } from "./patternPrivacyPolicy";
type LinkPrivacyPolicyProps = Omit<LinkProps, "href"> & { urlParams?: UrlParamsPrivacyPolicy };
export const LinkPrivacyPolicy: React.FunctionComponent<LinkPrivacyPolicyProps> = ({ urlParams, ...props }) => {
  const href = generateUrl(patternPrivacyPolicy, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
  return <Link {...props} href={href} />;
};
