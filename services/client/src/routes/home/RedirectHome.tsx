/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import RedirectServerSide from "route-codegen/RedirectServerSide";
import generateUrl from "route-codegen/generateUrl";
import { UrlPartsHome, patternHome, originHome } from "./patternHome";
const RedirectHome: React.FunctionComponent<UrlPartsHome & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternHome, {}, props.query, props.origin ?? originHome);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectHome;
