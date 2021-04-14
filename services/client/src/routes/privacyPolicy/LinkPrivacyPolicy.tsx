/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "~/common/shared-ui/Anchor";
import { patternPrivacyPolicy, UrlPartsPrivacyPolicy, originPrivacyPolicy } from "./patternPrivacyPolicy";
type LinkPrivacyPolicyProps = Omit<AnchorProps, "href"> & UrlPartsPrivacyPolicy;
const LinkPrivacyPolicy: React.FunctionComponent<LinkPrivacyPolicyProps> = ({ query, origin, ...props }) => {
  const to = generateUrl(patternPrivacyPolicy, {}, query, origin ?? originPrivacyPolicy);
  return <Link {...props} href={to} />;
};
export default LinkPrivacyPolicy;
