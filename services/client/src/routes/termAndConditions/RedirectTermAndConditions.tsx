/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlPartsTermAndConditions, patternTermAndConditions, originTermAndConditions } from "./patternTermAndConditions";
const RedirectTermAndConditions: React.FunctionComponent<UrlPartsTermAndConditions & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternTermAndConditions, {}, props.query, props.origin ?? originTermAndConditions);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectTermAndConditions;
