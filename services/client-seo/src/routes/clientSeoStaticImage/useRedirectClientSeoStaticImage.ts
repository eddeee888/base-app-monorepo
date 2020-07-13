/* This file was automatically generated with route-codegen and should not be edited. */
import Router from "next/router";
import {
  patternClientSeoStaticImage,
  UrlPartsClientSeoStaticImage,
  patternNextJSClientSeoStaticImage,
  possilePathParamsClientSeoStaticImage,
} from "./patternClientSeoStaticImage";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnClientSeoStaticImage = (urlParts: UrlPartsClientSeoStaticImage) => void;
const useRedirectClientSeoStaticImage = (): RedirectFnClientSeoStaticImage => {
  const redirect: RedirectFnClientSeoStaticImage = (urlParts) => {
    const to = generateUrl(patternClientSeoStaticImage, urlParts.path, urlParts?.urlQuery, urlParts?.origin);
    const url = possilePathParamsClientSeoStaticImage
      .filter((key) => !(key in urlParts.path))
      .reduce((prevPattern, suppliedParam) => prevPattern.replace(`/[${suppliedParam}]`, ""), patternNextJSClientSeoStaticImage);
    Router.push(url, to);
  };
  return redirect;
};
export default useRedirectClientSeoStaticImage;
