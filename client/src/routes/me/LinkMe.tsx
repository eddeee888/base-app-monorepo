/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import Link, { LinkProps } from "common/components/Link";
import { patternMe, UrlPartsMe } from "./patternMe";
type LinkMeProps = Omit<LinkProps, "to"> & UrlPartsMe;
const LinkMe: React.FunctionComponent<LinkMeProps> = ({ urlQuery, origin, ...props }) => {
  const to = generateUrl(patternMe, {}, urlQuery, origin);
  return <Link {...props} to={to} />;
};
export default LinkMe;
