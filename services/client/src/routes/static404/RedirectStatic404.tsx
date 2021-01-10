/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlPartsStatic404, patternStatic404, originStatic404 } from "./patternStatic404";
const RedirectStatic404: React.FunctionComponent<UrlPartsStatic404 & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternStatic404, {}, props.query, props.origin ?? originStatic404);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectStatic404;
