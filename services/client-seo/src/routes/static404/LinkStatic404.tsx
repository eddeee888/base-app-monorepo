/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import Link, { LinkProps } from "common/components/Link";
import { patternStatic404, UrlPartsStatic404, patternNextJSStatic404 } from "./patternStatic404";
type LinkStatic404Props = Omit<LinkProps, "href"> & UrlPartsStatic404;
const LinkStatic404: React.FunctionComponent<LinkStatic404Props> = ({ urlQuery, origin, ...props }) => {
  const to = generateUrl(patternStatic404, {}, urlQuery, origin);
  return <Link {...props} href={patternNextJSStatic404} as={to} />;
};
export default LinkStatic404;
