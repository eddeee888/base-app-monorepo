/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "@/shared/ui/Anchor";
import { patternLogin, UrlParamsLogin, originLogin } from "./patternLogin";
type LinkLoginProps = Omit<AnchorProps, "href"> & { urlParams?: UrlParamsLogin };
export const LinkLogin: React.FunctionComponent<LinkLoginProps> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternLogin, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originLogin });
  return <Link {...props} href={to} />;
};
