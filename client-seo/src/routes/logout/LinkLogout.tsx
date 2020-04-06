/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "route-codegen";
import Link, { AnchorProps } from "src/common/shared-ui/Anchor";
import { patternLogout, UrlPartsLogout } from "./patternLogout";
type LinkLogoutProps = Omit<AnchorProps, "href"> & UrlPartsLogout;
const LinkLogout: React.FunctionComponent<LinkLogoutProps> = ({ urlQuery, ...props }) => {
  const to = generateUrl(patternLogout, {}, urlQuery);
  return <Link {...props} href={to} />;
};
export default LinkLogout;
