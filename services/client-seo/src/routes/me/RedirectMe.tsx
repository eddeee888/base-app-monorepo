/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsMe, patternMe, originMe } from "./patternMe";
export const RedirectMe: React.FunctionComponent<{ fallback?: React.ReactNode; urlParams?: UrlParamsMe }> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternMe, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originMe });
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
