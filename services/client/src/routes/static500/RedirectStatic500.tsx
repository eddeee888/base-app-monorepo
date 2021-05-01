/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsStatic500, patternStatic500, originStatic500 } from "./patternStatic500";
export const RedirectStatic500: React.FunctionComponent<{ fallback?: React.ReactNode; urlParams?: UrlParamsStatic500 }> = ({
  urlParams,
  ...props
}) => {
  const to = generateUrl(patternStatic500, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originStatic500 });
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
