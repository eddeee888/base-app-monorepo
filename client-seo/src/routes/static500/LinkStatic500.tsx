/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import Link, { LinkProps } from "common/components/Link";
import { patternStatic500, UrlPartsStatic500, patternNextJSStatic500 } from "./patternStatic500";
type LinkStatic500Props = Omit<LinkProps, "href"> & UrlPartsStatic500;
const LinkStatic500: React.FunctionComponent<LinkStatic500Props> = ({ urlQuery, origin, ...props }) => {
  const to = generateUrl(patternStatic500, {}, urlQuery, origin);
  return <Link {...props} href={patternNextJSStatic500} as={to} />;
};
export default LinkStatic500;
