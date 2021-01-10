/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlPartsLogout, patternLogout, originLogout } from "./patternLogout";
const RedirectLogout: React.FunctionComponent<UrlPartsLogout & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternLogout, {}, props.query, props.origin ?? originLogout);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectLogout;
