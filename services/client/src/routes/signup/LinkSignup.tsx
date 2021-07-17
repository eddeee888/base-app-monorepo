/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import { AnchorProps, Anchor as Link } from "@/shared/ui";
import { patternSignup, UrlParamsSignup, originSignup } from "./patternSignup";
type LinkSignupProps = Omit<AnchorProps, "href"> & { urlParams?: UrlParamsSignup };
export const LinkSignup: React.FunctionComponent<LinkSignupProps> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternSignup, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originSignup });
  return <Link {...props} href={to} />;
};
