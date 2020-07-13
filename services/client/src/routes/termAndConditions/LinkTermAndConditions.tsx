/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import Link, { AnchorProps } from "common/shared-ui/Anchor";
import { patternTermAndConditions, UrlPartsTermAndConditions, originTermAndConditions } from "./patternTermAndConditions";
type LinkTermAndConditionsProps = Omit<AnchorProps, "href"> & UrlPartsTermAndConditions;
const LinkTermAndConditions: React.FunctionComponent<LinkTermAndConditionsProps> = ({ urlQuery, origin, ...props }) => {
  const to = generateUrl(patternTermAndConditions, {}, urlQuery, origin ?? originTermAndConditions);
  return <Link {...props} href={to} />;
};
export default LinkTermAndConditions;
