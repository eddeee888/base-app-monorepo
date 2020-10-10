/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import RedirectServerSide from "route-codegen/RedirectServerSide";
import generateUrl from "route-codegen/generateUrl";
import { UrlPartsPrivacyPolicy, patternPrivacyPolicy, originPrivacyPolicy } from "./patternPrivacyPolicy";
const RedirectPrivacyPolicy: React.FunctionComponent<UrlPartsPrivacyPolicy & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternPrivacyPolicy, {}, props.query, props.origin ?? originPrivacyPolicy);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectPrivacyPolicy;
