/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import Link, { LinkProps } from "common/components/Link";
import { patternTermAndConditions, UrlPartsTermAndConditions, patternNextJSTermAndConditions } from "./patternTermAndConditions";
type LinkTermAndConditionsProps = Omit<LinkProps, "href"> & UrlPartsTermAndConditions;
const LinkTermAndConditions: React.FunctionComponent<LinkTermAndConditionsProps> = ({ urlQuery, origin, ...props }) => {
  const to = generateUrl(patternTermAndConditions, {}, urlQuery, origin);
  return <Link {...props} href={patternNextJSTermAndConditions} as={to} />;
};
export default LinkTermAndConditions;
