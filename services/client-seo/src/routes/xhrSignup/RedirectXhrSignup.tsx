/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import RedirectServerSide from "route-codegen/RedirectServerSide";
import generateUrl from "route-codegen/generateUrl";
import { UrlPartsXhrSignup, patternXhrSignup, originXhrSignup } from "./patternXhrSignup";
const RedirectXhrSignup: React.FunctionComponent<UrlPartsXhrSignup & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternXhrSignup, {}, props.query, props.origin ?? originXhrSignup);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectXhrSignup;
