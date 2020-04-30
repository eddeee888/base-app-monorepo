/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import { Redirect } from "react-router";
import { UrlPartsSignup, patternSignup } from "./patternSignup";
const RedirectSignup: React.FunctionComponent<UrlPartsSignup & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternSignup, {}, props.urlQuery);
  return (
    <>
      <Redirect to={to} />
      {props.fallback}
    </>
  );
};
export default RedirectSignup;
