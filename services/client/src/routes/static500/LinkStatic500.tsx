/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import Link, { AnchorProps } from "common/shared-ui/Anchor";
import { patternStatic500, UrlPartsStatic500, originStatic500 } from "./patternStatic500";
type LinkStatic500Props = Omit<AnchorProps, "href"> & UrlPartsStatic500;
const LinkStatic500: React.FunctionComponent<LinkStatic500Props> = ({ query, origin, ...props }) => {
  const to = generateUrl(patternStatic500, {}, query, origin ?? originStatic500);
  return <Link {...props} href={to} />;
};
export default LinkStatic500;
