/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "common/components/Link";
import { UrlPartsLogin, patternNextJSLogin } from "./patternLogin";
type LinkLoginProps = Omit<LinkProps, "nextHref"> & UrlPartsLogin;
const LinkLogin: React.FunctionComponent<LinkLoginProps> = (props) => {
  const { query = {}, ...rest } = props;
  const path = {};
  const pathname = patternNextJSLogin;
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...rest} nextHref={nextHref} />;
};
export default LinkLogin;
