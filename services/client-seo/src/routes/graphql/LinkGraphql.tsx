/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import Link, { AnchorProps } from "common/shared-ui/Anchor";
import { patternGraphql, UrlPartsGraphql, originGraphql } from "./patternGraphql";
type LinkGraphqlProps = Omit<AnchorProps, "href"> & UrlPartsGraphql;
const LinkGraphql: React.FunctionComponent<LinkGraphqlProps> = ({ query, origin, ...props }) => {
  const to = generateUrl(patternGraphql, {}, query, origin ?? originGraphql);
  return <Link {...props} href={to} />;
};
export default LinkGraphql;
