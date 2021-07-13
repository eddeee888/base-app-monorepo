/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { LinkProps, Link as Link } from "@/common";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsSignup, patternSignup } from "./patternSignup";
type LinkSignupProps = Omit<LinkProps, "href"> & { urlParams?: UrlParamsSignup };
export const LinkSignup: React.FunctionComponent<LinkSignupProps> = ({ urlParams, ...props }) => {
  const href = generateUrl(patternSignup, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
  return <Link {...props} href={href} />;
};
