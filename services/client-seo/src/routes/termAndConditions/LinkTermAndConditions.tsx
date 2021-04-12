/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import { UrlPartsTermAndConditions, patternNextJSTermAndConditions } from "./patternTermAndConditions";
type LinkTermAndConditionsProps = Omit<LinkProps, "nextHref"> & UrlPartsTermAndConditions;
const LinkTermAndConditions: React.FunctionComponent<LinkTermAndConditionsProps> = (props) => {
  const { query = {}, ...rest } = props;
  const path = {};
  const pathname = patternNextJSTermAndConditions;
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...rest} nextHref={nextHref} />;
};
export default LinkTermAndConditions;
