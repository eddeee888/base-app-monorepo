/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import RedirectServerSide from "route-codegen/RedirectServerSide";
import generateUrl from "route-codegen/generateUrl";
import { UrlPartsXhrLogin, patternXhrLogin, originXhrLogin } from "./patternXhrLogin";
const RedirectXhrLogin: React.FunctionComponent<UrlPartsXhrLogin & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternXhrLogin, {}, props.query, props.origin ?? originXhrLogin);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectXhrLogin;
