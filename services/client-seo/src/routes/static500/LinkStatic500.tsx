/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { LinkProps, Link as Link } from "@/common";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsStatic500, patternStatic500 } from "./patternStatic500";
type LinkStatic500Props = Omit<LinkProps, "href"> & { urlParams?: UrlParamsStatic500 };
export const LinkStatic500: React.FunctionComponent<LinkStatic500Props> = ({ urlParams, ...props }) => {
  const href = generateUrl(patternStatic500, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
  return <Link {...props} href={href} />;
};
