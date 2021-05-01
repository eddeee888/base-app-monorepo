/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsLogout, patternLogout, originLogout } from "./patternLogout";
export const RedirectLogout: React.FunctionComponent<{ fallback?: React.ReactNode; urlParams?: UrlParamsLogout }> = ({
  urlParams,
  ...props
}) => {
  const to = generateUrl(patternLogout, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originLogout });
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
