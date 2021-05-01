/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "~/common/components/Link";
import {
  UrlParamsClientSeoStaticImage,
  patternNextJSClientSeoStaticImage,
  possilePathParamsClientSeoStaticImage,
} from "./patternClientSeoStaticImage";
type LinkClientSeoStaticImageProps = Omit<LinkProps, "nextHref"> & { urlParams: UrlParamsClientSeoStaticImage };
export const LinkClientSeoStaticImage: React.FunctionComponent<LinkClientSeoStaticImageProps> = ({ urlParams, ...props }) => {
  const { query = {} } = urlParams;
  const path = urlParams.path;
  const pathname = possilePathParamsClientSeoStaticImage
    .filter((key) => !(key in path))
    .reduce((prevPattern, suppliedParam) => prevPattern.replace(`/[${suppliedParam}]`, ""), patternNextJSClientSeoStaticImage);
  const nextHref = {
    pathname: pathname,
    query: {
      ...path,
      ...query,
    },
  };
  return <Link {...props} nextHref={nextHref} />;
};
