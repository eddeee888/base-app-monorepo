/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "~/common/shared-ui/Anchor";
import { patternXhrSignup, UrlPartsXhrSignup, originXhrSignup } from "./patternXhrSignup";
type LinkXhrSignupProps = Omit<AnchorProps, "href"> & UrlPartsXhrSignup;
const LinkXhrSignup: React.FunctionComponent<LinkXhrSignupProps> = ({ query, origin, ...props }) => {
  const to = generateUrl(patternXhrSignup, {}, query, origin ?? originXhrSignup);
  return <Link {...props} href={to} />;
};
export default LinkXhrSignup;
