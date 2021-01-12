/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import { Redirect } from "react-router";
import { UrlPartsMe, patternMe } from "./patternMe";
const RedirectMe: React.FunctionComponent<UrlPartsMe & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternMe, {}, props.query, props.origin);
  return (
    <>
      <Redirect to={to} />
      {props.fallback}
    </>
  );
};
export default RedirectMe;
