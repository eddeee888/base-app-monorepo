/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsStatic404, patternStatic404, originStatic404 } from "./patternStatic404";
export const RedirectStatic404: React.FunctionComponent<{ fallback?: React.ReactNode; urlParams?: UrlParamsStatic404 }> = ({
  urlParams,
  ...props
}) => {
  const to = generateUrl(patternStatic404, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originStatic404 });
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
