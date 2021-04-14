/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import { UrlPartsStatic500, patternNextJSStatic500 } from "./patternStatic500";
type LinkStatic500Props = Omit<LinkProps, "nextHref"> & UrlPartsStatic500;
const LinkStatic500: React.FunctionComponent<LinkStatic500Props> = (props) => {
  const { query = {}, ...rest } = props;
  const path = {};
  const pathname = patternNextJSStatic500;
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...rest} nextHref={nextHref} />;
};
export default LinkStatic500;
