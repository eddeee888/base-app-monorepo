/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import { Redirect } from "react-router";
import { UrlParamsMe, patternMe } from "./patternMe";
export const RedirectMe: React.FunctionComponent<{ fallback?: React.ReactNode; urlParams?: UrlParamsMe }> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternMe, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
  return (
    <>
      <Redirect to={to} />
      {props.fallback}
    </>
  );
};
