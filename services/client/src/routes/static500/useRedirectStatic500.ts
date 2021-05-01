/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlParamsStatic500, patternStatic500, originStatic500 } from "./patternStatic500";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnStatic500 = (urlParams?: UrlParamsStatic500) => void;
export const useRedirectStatic500 = (): RedirectFnStatic500 => {
  const redirect: RedirectFnStatic500 = (urlParams) => {
    const to = generateUrl(patternStatic500, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originStatic500 });
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
