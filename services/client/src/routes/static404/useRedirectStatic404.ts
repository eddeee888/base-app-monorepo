/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlParamsStatic404, patternStatic404, originStatic404 } from "./patternStatic404";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnStatic404 = (urlParams?: UrlParamsStatic404) => void;
export const useRedirectStatic404 = (): RedirectFnStatic404 => {
  const redirect: RedirectFnStatic404 = (urlParams) => {
    const to = generateUrl(patternStatic404, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originStatic404 });
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
