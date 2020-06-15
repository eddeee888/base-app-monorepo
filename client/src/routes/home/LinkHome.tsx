/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import Link, { AnchorProps } from "common/shared-ui/Anchor";
import { patternHome, UrlPartsHome, originHome } from "./patternHome";
type LinkHomeProps = Omit<AnchorProps, "href"> & UrlPartsHome;
const LinkHome: React.FunctionComponent<LinkHomeProps> = ({ urlQuery, origin, ...props }) => {
  const to = generateUrl(patternHome, {}, urlQuery, origin ?? originHome);
  return <Link {...props} href={to} />;
};
export default LinkHome;
