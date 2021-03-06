/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "~/common/shared-ui/Anchor";
import { patternStatic500, UrlParamsStatic500, originStatic500 } from "./patternStatic500";
type LinkStatic500Props = Omit<AnchorProps, "href"> & { urlParams?: UrlParamsStatic500 };
export const LinkStatic500: React.FunctionComponent<LinkStatic500Props> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternStatic500, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originStatic500 });
  return <Link {...props} href={to} />;
};
