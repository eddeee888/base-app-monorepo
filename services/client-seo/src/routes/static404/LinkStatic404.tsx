/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import { UrlPartsStatic404, patternNextJSStatic404 } from "./patternStatic404";
type LinkStatic404Props = Omit<LinkProps, "nextHref"> & UrlPartsStatic404;
const LinkStatic404: React.FunctionComponent<LinkStatic404Props> = (props) => {
  const { query = {}, ...rest } = props;
  const path = {};
  const pathname = patternNextJSStatic404;
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...rest} nextHref={nextHref} />;
};
export default LinkStatic404;
