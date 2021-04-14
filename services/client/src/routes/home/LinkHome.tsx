/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "~/common/shared-ui/Anchor";
import { patternHome, UrlPartsHome, originHome } from "./patternHome";
type LinkHomeProps = Omit<AnchorProps, "href"> & UrlPartsHome;
const LinkHome: React.FunctionComponent<LinkHomeProps> = ({ query, origin, ...props }) => {
  const to = generateUrl(patternHome, {}, query, origin ?? originHome);
  return <Link {...props} href={to} />;
};
export default LinkHome;
