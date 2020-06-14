/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import { Redirect } from "react-router";
import { UrlPartsLogin, patternLogin } from "./patternLogin";
const RedirectLogin: React.FunctionComponent<UrlPartsLogin & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternLogin, {}, props.urlQuery, props.origin);
  return (
    <>
      <Redirect to={to} />
      {props.fallback}
    </>
  );
};
export default RedirectLogin;
