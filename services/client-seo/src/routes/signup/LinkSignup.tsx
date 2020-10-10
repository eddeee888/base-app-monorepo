/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "common/components/Link";
import { UrlPartsSignup, patternNextJSSignup } from "./patternSignup";
type LinkSignupProps = Omit<LinkProps, "nextHref"> & UrlPartsSignup;
const LinkSignup: React.FunctionComponent<LinkSignupProps> = (props) => {
  const { query = {}, ...rest } = props;
  const path = {};
  const pathname = patternNextJSSignup;
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...rest} nextHref={nextHref} />;
};
export default LinkSignup;
