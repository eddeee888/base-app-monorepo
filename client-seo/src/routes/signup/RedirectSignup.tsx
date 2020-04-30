/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import RedirectServerSide from "route-codegen/RedirectServerSide";
import generateUrl from "route-codegen/generateUrl";
import { UrlPartsSignup, patternSignup } from "./patternSignup";
const RedirectSignup: React.FunctionComponent<UrlPartsSignup & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternSignup, {}, props.urlQuery);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectSignup;
