/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "route-codegen";
import Link, { LinkProps } from "common/components/Link";
import { patternSignup, UrlPartsSignup } from "./patternSignup";
type LinkSignupProps = Omit<LinkProps, "to"> & UrlPartsSignup;
const LinkSignup: React.FunctionComponent<LinkSignupProps> = ({ urlQuery, ...props }) => {
  const to = generateUrl(patternSignup, {}, urlQuery);
  return <Link {...props} to={to} />;
};
export default LinkSignup;
