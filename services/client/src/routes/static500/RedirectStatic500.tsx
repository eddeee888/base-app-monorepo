/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import RedirectServerSide from "route-codegen/RedirectServerSide";
import generateUrl from "route-codegen/generateUrl";
import { UrlPartsStatic500, patternStatic500, originStatic500 } from "./patternStatic500";
const RedirectStatic500: React.FunctionComponent<UrlPartsStatic500 & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternStatic500, {}, props.urlQuery, props.origin ?? originStatic500);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectStatic500;
