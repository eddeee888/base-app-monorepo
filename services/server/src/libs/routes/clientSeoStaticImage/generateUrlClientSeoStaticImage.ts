/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternClientSeoStaticImage, UrlParamsClientSeoStaticImage, originClientSeoStaticImage } from "./patternClientSeoStaticImage";
export const generateUrlClientSeoStaticImage = (urlParams: UrlParamsClientSeoStaticImage): string =>
  generateUrl(patternClientSeoStaticImage, {
    path: urlParams.path,
    query: urlParams?.query,
    origin: urlParams?.origin ?? originClientSeoStaticImage,
  });
