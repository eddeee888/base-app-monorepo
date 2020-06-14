/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import Link, { AnchorProps } from "common/shared-ui/Anchor";
import { patternMe, UrlPartsMe, originMe } from "./patternMe";
type LinkMeProps = Omit<AnchorProps, "href"> & UrlPartsMe;
const LinkMe: React.FunctionComponent<LinkMeProps> = ({ urlQuery, origin, ...props }) => {
  const to = generateUrl(patternMe, {}, urlQuery, origin ?? originMe);
  return <Link {...props} href={to} />;
};
export default LinkMe;
