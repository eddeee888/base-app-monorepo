/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "~/shared/ui/Anchor";
import { patternLogout, UrlParamsLogout, originLogout } from "./patternLogout";
type LinkLogoutProps = Omit<AnchorProps, "href"> & { urlParams?: UrlParamsLogout };
export const LinkLogout: React.FunctionComponent<LinkLogoutProps> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternLogout, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originLogout });
  return <Link {...props} href={to} />;
};
