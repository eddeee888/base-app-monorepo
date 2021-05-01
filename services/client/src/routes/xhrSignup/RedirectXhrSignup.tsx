/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsXhrSignup, patternXhrSignup, originXhrSignup } from "./patternXhrSignup";
export const RedirectXhrSignup: React.FunctionComponent<{ fallback?: React.ReactNode; urlParams?: UrlParamsXhrSignup }> = ({
  urlParams,
  ...props
}) => {
  const to = generateUrl(patternXhrSignup, { path: {}, query: urlParams.query, origin: urlParams.origin ?? originXhrSignup });
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
