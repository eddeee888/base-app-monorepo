/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlPartsSignup, patternSignup, originSignup } from "./patternSignup";
const RedirectSignup: React.FunctionComponent<UrlPartsSignup & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternSignup, {}, props.query, props.origin ?? originSignup);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectSignup;
