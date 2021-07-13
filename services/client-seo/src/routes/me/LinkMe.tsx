/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "~/shared/ui/Anchor";
import { patternMe, UrlParamsMe, originMe } from "./patternMe";
type LinkMeProps = Omit<AnchorProps, "href"> & { urlParams?: UrlParamsMe };
export const LinkMe: React.FunctionComponent<LinkMeProps> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternMe, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originMe });
  return <Link {...props} href={to} />;
};
