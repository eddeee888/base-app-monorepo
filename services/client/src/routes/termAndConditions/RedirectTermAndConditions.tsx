/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsTermAndConditions, patternTermAndConditions, originTermAndConditions } from "./patternTermAndConditions";
export const RedirectTermAndConditions: React.FunctionComponent<{ fallback?: React.ReactNode; urlParams?: UrlParamsTermAndConditions }> = ({
  urlParams,
  ...props
}) => {
  const to = generateUrl(patternTermAndConditions, {
    path: {},
    query: urlParams?.query,
    origin: urlParams?.origin ?? originTermAndConditions,
  });
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
