/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "~/shared/ui/Anchor";
import { patternGraphql, UrlParamsGraphql, originGraphql } from "./patternGraphql";
type LinkGraphqlProps = Omit<AnchorProps, "href"> & { urlParams?: UrlParamsGraphql };
export const LinkGraphql: React.FunctionComponent<LinkGraphqlProps> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternGraphql, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originGraphql });
  return <Link {...props} href={to} />;
};
