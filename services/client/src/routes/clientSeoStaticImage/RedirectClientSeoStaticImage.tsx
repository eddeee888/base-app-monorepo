/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { RedirectServerSide } from "@route-codegen/react";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsClientSeoStaticImage, patternClientSeoStaticImage, originClientSeoStaticImage } from "./patternClientSeoStaticImage";
export const RedirectClientSeoStaticImage: React.FunctionComponent<{
  fallback?: React.ReactNode;
  urlParams: UrlParamsClientSeoStaticImage;
}> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternClientSeoStaticImage, {
    path: urlParams.path,
    query: urlParams.query,
    origin: urlParams.origin ?? originClientSeoStaticImage,
  });
  return <RedirectServerSide href={to} fallback={props.fallback} />;
};
