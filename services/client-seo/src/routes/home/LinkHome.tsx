/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsHome, patternHome } from "./patternHome";
type LinkHomeProps = Omit<LinkProps, "href"> & { urlParams?: UrlParamsHome };
export const LinkHome: React.FunctionComponent<LinkHomeProps> = ({ urlParams, ...props }) => {
  const href = generateUrl(patternHome, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
  return <Link {...props} href={href} />;
};
