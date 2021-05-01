/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlParamsClientSeoStaticImage, patternClientSeoStaticImage, originClientSeoStaticImage } from "./patternClientSeoStaticImage";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnClientSeoStaticImage = (urlParams: UrlParamsClientSeoStaticImage) => void;
export const useRedirectClientSeoStaticImage = (): RedirectFnClientSeoStaticImage => {
  const redirect: RedirectFnClientSeoStaticImage = (urlParams) => {
    const to = generateUrl(patternClientSeoStaticImage, {
      path: urlParams.path,
      query: urlParams?.query,
      origin: urlParams?.origin ?? originClientSeoStaticImage,
    });
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
