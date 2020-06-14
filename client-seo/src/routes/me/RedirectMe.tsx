/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import RedirectServerSide from "route-codegen/RedirectServerSide";
import generateUrl from "route-codegen/generateUrl";
import { UrlPartsMe, patternMe, originMe } from "./patternMe";
const RedirectMe: React.FunctionComponent<UrlPartsMe & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternMe, {}, props.urlQuery, props.origin ?? originMe);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectMe;