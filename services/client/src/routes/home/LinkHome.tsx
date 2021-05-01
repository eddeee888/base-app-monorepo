/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "~/common/shared-ui/Anchor";
import { patternHome, UrlParamsHome, originHome } from "./patternHome";
type LinkHomeProps = Omit<AnchorProps, "href"> & { urlParams?: UrlParamsHome };
export const LinkHome: React.FunctionComponent<LinkHomeProps> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternHome, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originHome });
  return <Link {...props} href={to} />;
};
