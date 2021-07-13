/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "~/shared/ui/Anchor";
import { patternXhrLogin, UrlParamsXhrLogin, originXhrLogin } from "./patternXhrLogin";
type LinkXhrLoginProps = Omit<AnchorProps, "href"> & { urlParams?: UrlParamsXhrLogin };
export const LinkXhrLogin: React.FunctionComponent<LinkXhrLoginProps> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternXhrLogin, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originXhrLogin });
  return <Link {...props} href={to} />;
};
