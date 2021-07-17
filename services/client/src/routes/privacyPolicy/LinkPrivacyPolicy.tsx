/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import { AnchorProps, Anchor as Link } from "@/shared/ui";
import { patternPrivacyPolicy, UrlParamsPrivacyPolicy, originPrivacyPolicy } from "./patternPrivacyPolicy";
type LinkPrivacyPolicyProps = Omit<AnchorProps, "href"> & { urlParams?: UrlParamsPrivacyPolicy };
export const LinkPrivacyPolicy: React.FunctionComponent<LinkPrivacyPolicyProps> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternPrivacyPolicy, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originPrivacyPolicy });
  return <Link {...props} href={to} />;
};
