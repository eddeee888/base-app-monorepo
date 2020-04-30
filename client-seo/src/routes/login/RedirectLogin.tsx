/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import RedirectServerSide from "route-codegen/RedirectServerSide";
import generateUrl from "route-codegen/generateUrl";
import { UrlPartsLogin, patternLogin } from "./patternLogin";
const RedirectLogin: React.FunctionComponent<UrlPartsLogin & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternLogin, {}, props.urlQuery);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectLogin;
