/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsLogin, patternLogin } from "./patternLogin";
type LinkLoginProps = Omit<LinkProps, "href"> & { urlParams?: UrlParamsLogin };
export const LinkLogin: React.FunctionComponent<LinkLoginProps> = ({ urlParams, ...props }) => {
  const href = generateUrl(patternLogin, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
  return <Link {...props} href={href} />;
};
