/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "common/shared-ui/Anchor";
import { patternLogout, UrlPartsLogout, originLogout } from "./patternLogout";
type LinkLogoutProps = Omit<AnchorProps, "href"> & UrlPartsLogout;
const LinkLogout: React.FunctionComponent<LinkLogoutProps> = ({ query, origin, ...props }) => {
  const to = generateUrl(patternLogout, {}, query, origin ?? originLogout);
  return <Link {...props} href={to} />;
};
export default LinkLogout;
