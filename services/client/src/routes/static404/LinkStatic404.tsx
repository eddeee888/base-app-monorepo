/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "~/shared/ui/Anchor";
import { patternStatic404, UrlParamsStatic404, originStatic404 } from "./patternStatic404";
type LinkStatic404Props = Omit<AnchorProps, "href"> & { urlParams?: UrlParamsStatic404 };
export const LinkStatic404: React.FunctionComponent<LinkStatic404Props> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternStatic404, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originStatic404 });
  return <Link {...props} href={to} />;
};
