/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import Link, { AnchorProps } from "common/shared-ui/Anchor";
import { patternXhrLogin, UrlPartsXhrLogin, originXhrLogin } from "./patternXhrLogin";
type LinkXhrLoginProps = Omit<AnchorProps, "href"> & UrlPartsXhrLogin;
const LinkXhrLogin: React.FunctionComponent<LinkXhrLoginProps> = ({ query, origin, ...props }) => {
  const to = generateUrl(patternXhrLogin, {}, query, origin ?? originXhrLogin);
  return <Link {...props} href={to} />;
};
export default LinkXhrLogin;
