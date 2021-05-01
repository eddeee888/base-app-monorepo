/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "~/common/shared-ui/Anchor";
import { patternClientSeoStaticImage, UrlParamsClientSeoStaticImage, originClientSeoStaticImage } from "./patternClientSeoStaticImage";
type LinkClientSeoStaticImageProps = Omit<AnchorProps, "href"> & { urlParams: UrlParamsClientSeoStaticImage };
export const LinkClientSeoStaticImage: React.FunctionComponent<LinkClientSeoStaticImageProps> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternClientSeoStaticImage, {
    path: urlParams.path,
    query: urlParams?.query,
    origin: urlParams?.origin ?? originClientSeoStaticImage,
  });
  return <Link {...props} href={to} />;
};
