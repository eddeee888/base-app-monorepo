/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import Link, { AnchorProps } from "common/shared-ui/Anchor";
import { patternClientSeoStaticImage, UrlPartsClientSeoStaticImage, originClientSeoStaticImage } from "./patternClientSeoStaticImage";
type LinkClientSeoStaticImageProps = Omit<AnchorProps, "href"> & UrlPartsClientSeoStaticImage;
const LinkClientSeoStaticImage: React.FunctionComponent<LinkClientSeoStaticImageProps> = ({ path, urlQuery, origin, ...props }) => {
  const to = generateUrl(patternClientSeoStaticImage, path, urlQuery, origin ?? originClientSeoStaticImage);
  return <Link {...props} href={to} />;
};
export default LinkClientSeoStaticImage;
