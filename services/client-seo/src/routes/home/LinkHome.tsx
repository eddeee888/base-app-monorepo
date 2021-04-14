/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import { UrlPartsHome, patternNextJSHome } from "./patternHome";
type LinkHomeProps = Omit<LinkProps, "nextHref"> & UrlPartsHome;
const LinkHome: React.FunctionComponent<LinkHomeProps> = (props) => {
  const { query = {}, ...rest } = props;
  const path = {};
  const pathname = patternNextJSHome;
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...rest} nextHref={nextHref} />;
};
export default LinkHome;
