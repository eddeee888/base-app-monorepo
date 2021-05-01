/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlParamsLogout, patternLogout, originLogout } from "./patternLogout";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnLogout = (urlParams?: UrlParamsLogout) => void;
export const useRedirectLogout = (): RedirectFnLogout => {
  const redirect: RedirectFnLogout = (urlParams) => {
    const to = generateUrl(patternLogout, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originLogout });
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
