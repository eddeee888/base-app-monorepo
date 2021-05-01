/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsGraphql, patternGraphql, originGraphql } from "./patternGraphql";
export const RedirectGraphql: React.FunctionComponent<{ fallback?: React.ReactNode; urlParams?: UrlParamsGraphql }> = ({
  urlParams,
  ...props
}) => {
  const to = generateUrl(patternGraphql, { path: {}, query: urlParams.query, origin: urlParams.origin ?? originGraphql });
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
