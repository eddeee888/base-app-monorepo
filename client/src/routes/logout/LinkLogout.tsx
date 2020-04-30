/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import Link, { LinkProps } from "common/components/Link";
import { patternLogout, UrlPartsLogout } from "./patternLogout";
type LinkLogoutProps = Omit<LinkProps, "to"> & UrlPartsLogout;
const LinkLogout: React.FunctionComponent<LinkLogoutProps> = ({ urlQuery, ...props }) => {
  const to = generateUrl(patternLogout, {}, urlQuery);
  return <Link {...props} to={to} />;
};
export default LinkLogout;
