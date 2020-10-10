/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import Link, { LinkProps } from "common/components/Link";
import {
  UrlPartsClientSeoStaticImage,
  patternNextJSClientSeoStaticImage,
  possilePathParamsClientSeoStaticImage,
} from "./patternClientSeoStaticImage";
type LinkClientSeoStaticImageProps = Omit<LinkProps, "nextHref"> & UrlPartsClientSeoStaticImage;
const LinkClientSeoStaticImage: React.FunctionComponent<LinkClientSeoStaticImageProps> = (props) => {
  const { path = {}, query = {}, ...rest } = props;
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
  return <Link {...rest} nextHref={nextHref} />;
};
export default LinkClientSeoStaticImage;
