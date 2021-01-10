/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsClientSeoStaticImage, patternClientSeoStaticImage, originClientSeoStaticImage } from "./patternClientSeoStaticImage";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnClientSeoStaticImage = (urlParts: UrlPartsClientSeoStaticImage) => void;
const useRedirectClientSeoStaticImage = (): RedirectFnClientSeoStaticImage => {
  const redirect: RedirectFnClientSeoStaticImage = (urlParts) => {
    const to = generateUrl(patternClientSeoStaticImage, urlParts.path, urlParts?.query, urlParts?.origin ?? originClientSeoStaticImage);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectClientSeoStaticImage;
