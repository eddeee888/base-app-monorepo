/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsSignup, patternSignup, originSignup } from "./patternSignup";
export const RedirectSignup: React.FunctionComponent<{ fallback?: React.ReactNode; urlParams?: UrlParamsSignup }> = ({
  urlParams,
  ...props
}) => {
  const to = generateUrl(patternSignup, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originSignup });
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
