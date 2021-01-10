/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlPartsGraphql, patternGraphql, originGraphql } from "./patternGraphql";
const RedirectGraphql: React.FunctionComponent<UrlPartsGraphql & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternGraphql, {}, props.query, props.origin ?? originGraphql);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectGraphql;
