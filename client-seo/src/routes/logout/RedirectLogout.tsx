/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import RedirectServerSide from "route-codegen/RedirectServerSide";
import generateUrl from "route-codegen/generateUrl";
import { UrlPartsLogout, patternLogout } from "./patternLogout";
const RedirectLogout: React.FunctionComponent<UrlPartsLogout & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternLogout, {}, props.urlQuery);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectLogout;
