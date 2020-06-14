/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import RedirectServerSide from "route-codegen/RedirectServerSide";
import generateUrl from "route-codegen/generateUrl";
import { UrlPartsTermAndConditions, patternTermAndConditions, originTermAndConditions } from "./patternTermAndConditions";
const RedirectTermAndConditions: React.FunctionComponent<UrlPartsTermAndConditions & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternTermAndConditions, {}, props.urlQuery, props.origin ?? originTermAndConditions);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectTermAndConditions;
