/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsStatic404, patternStatic404 } from "./patternStatic404";
type LinkStatic404Props = Omit<LinkProps, "href"> & { urlParams?: UrlParamsStatic404 };
export const LinkStatic404: React.FunctionComponent<LinkStatic404Props> = ({ urlParams, ...props }) => {
  const href = generateUrl(patternStatic404, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
  return <Link {...props} href={href} />;
};
