/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { LinkProps, Link as Link } from "@/common";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsClientSeoStaticImage, patternClientSeoStaticImage } from "./patternClientSeoStaticImage";
type LinkClientSeoStaticImageProps = Omit<LinkProps, "href"> & { urlParams: UrlParamsClientSeoStaticImage };
export const LinkClientSeoStaticImage: React.FunctionComponent<LinkClientSeoStaticImageProps> = ({ urlParams, ...props }) => {
  const href = generateUrl(patternClientSeoStaticImage, { path: urlParams.path, query: urlParams?.query, origin: urlParams?.origin });
  return <Link {...props} href={href} />;
};
