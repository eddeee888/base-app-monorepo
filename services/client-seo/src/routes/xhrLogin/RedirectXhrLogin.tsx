/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsXhrLogin, patternXhrLogin, originXhrLogin } from "./patternXhrLogin";
export const RedirectXhrLogin: React.FunctionComponent<{ fallback?: React.ReactNode; urlParams?: UrlParamsXhrLogin }> = ({
  urlParams,
  ...props
}) => {
  const to = generateUrl(patternXhrLogin, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originXhrLogin });
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
