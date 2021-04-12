/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "~/common/shared-ui/Anchor";
import { patternMe, UrlPartsMe, originMe } from "./patternMe";
type LinkMeProps = Omit<AnchorProps, "href"> & UrlPartsMe;
const LinkMe: React.FunctionComponent<LinkMeProps> = ({ query, origin, ...props }) => {
  const to = generateUrl(patternMe, {}, query, origin ?? originMe);
  return <Link {...props} href={to} />;
};
export default LinkMe;
