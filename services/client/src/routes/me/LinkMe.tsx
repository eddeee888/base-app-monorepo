/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import { LinkProps, Link as Link } from "@/common/Link";
import { patternMe, UrlParamsMe } from "./patternMe";
type LinkMeProps = Omit<LinkProps, "href"> & { urlParams?: UrlParamsMe };
export const LinkMe: React.FunctionComponent<LinkMeProps> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternMe, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
  return <Link {...props} href={to} />;
};
