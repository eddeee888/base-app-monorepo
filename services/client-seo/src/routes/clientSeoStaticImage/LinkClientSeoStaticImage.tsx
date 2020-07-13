/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import generateUrl from "route-codegen/generateUrl";
import Link, { LinkProps } from "common/components/Link";
import {
  patternClientSeoStaticImage,
  UrlPartsClientSeoStaticImage,
  patternNextJSClientSeoStaticImage,
  possilePathParamsClientSeoStaticImage,
} from "./patternClientSeoStaticImage";
type LinkClientSeoStaticImageProps = Omit<LinkProps, "href"> & UrlPartsClientSeoStaticImage;
const LinkClientSeoStaticImage: React.FunctionComponent<LinkClientSeoStaticImageProps> = ({ path, urlQuery, origin, ...props }) => {
  const to = generateUrl(patternClientSeoStaticImage, path, urlQuery, origin);
  const href = possilePathParamsClientSeoStaticImage
    .filter((key) => !(key in path))
    .reduce((prevPattern, suppliedParam) => prevPattern.replace(`/[${suppliedParam}]`, ""), patternNextJSClientSeoStaticImage);
  return <Link {...props} href={href} as={to} />;
};
export default LinkClientSeoStaticImage;
