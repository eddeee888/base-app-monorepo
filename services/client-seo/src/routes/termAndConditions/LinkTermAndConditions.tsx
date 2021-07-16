/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { LinkProps, Link as Link } from "@/common";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsTermAndConditions, patternTermAndConditions } from "./patternTermAndConditions";
type LinkTermAndConditionsProps = Omit<LinkProps, "href"> & { urlParams?: UrlParamsTermAndConditions };
export const LinkTermAndConditions: React.FunctionComponent<LinkTermAndConditionsProps> = ({ urlParams, ...props }) => {
  const href = generateUrl(patternTermAndConditions, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
  return <Link {...props} href={href} />;
};
