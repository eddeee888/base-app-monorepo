/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import RedirectServerSide from "route-codegen/RedirectServerSide";
import generateUrl from "route-codegen/generateUrl";
import { UrlPartsClientSeoStaticImage, patternClientSeoStaticImage, originClientSeoStaticImage } from "./patternClientSeoStaticImage";
const RedirectClientSeoStaticImage: React.FunctionComponent<UrlPartsClientSeoStaticImage & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternClientSeoStaticImage, props.path, props.urlQuery, props.origin ?? originClientSeoStaticImage);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectClientSeoStaticImage;
