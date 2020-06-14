/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import { Redirect } from "react-router";
import { UrlPartsLogout, patternLogout } from "./patternLogout";
const RedirectLogout: React.FunctionComponent<UrlPartsLogout & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternLogout, {}, props.urlQuery, props.origin);
  return (
    <>
      <Redirect to={to} />
      {props.fallback}
    </>
  );
};
export default RedirectLogout;
