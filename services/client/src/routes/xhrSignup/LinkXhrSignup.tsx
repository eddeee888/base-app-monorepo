/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import { AnchorProps, Anchor as Link } from "@/shared/ui";
import { patternXhrSignup, UrlParamsXhrSignup, originXhrSignup } from "./patternXhrSignup";
type LinkXhrSignupProps = Omit<AnchorProps, "href"> & { urlParams?: UrlParamsXhrSignup };
export const LinkXhrSignup: React.FunctionComponent<LinkXhrSignupProps> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternXhrSignup, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originXhrSignup });
  return <Link {...props} href={to} />;
};
