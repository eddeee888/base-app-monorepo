/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsPrivacyPolicy, patternPrivacyPolicy, originPrivacyPolicy } from "./patternPrivacyPolicy";
export const RedirectPrivacyPolicy: React.FunctionComponent<{ fallback?: React.ReactNode; urlParams?: UrlParamsPrivacyPolicy }> = ({
  urlParams,
  ...props
}) => {
  const to = generateUrl(patternPrivacyPolicy, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originPrivacyPolicy });
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
