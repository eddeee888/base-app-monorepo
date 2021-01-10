/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlPartsClientSeoStaticImage, patternClientSeoStaticImage, originClientSeoStaticImage } from "./patternClientSeoStaticImage";
const RedirectClientSeoStaticImage: React.FunctionComponent<UrlPartsClientSeoStaticImage & { fallback?: React.ReactNode }> = (props) => {
  const to = generateUrl(patternClientSeoStaticImage, props.path, props.query, props.origin ?? originClientSeoStaticImage);
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
export default RedirectClientSeoStaticImage;
