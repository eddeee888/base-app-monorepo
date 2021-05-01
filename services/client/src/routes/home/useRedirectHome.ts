/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlParamsHome, patternHome, originHome } from "./patternHome";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnHome = (urlParams?: UrlParamsHome) => void;
export const useRedirectHome = (): RedirectFnHome => {
  const redirect: RedirectFnHome = (urlParams) => {
    const to = generateUrl(patternHome, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originHome });
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
