/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlParamsXhrSignup, patternXhrSignup, originXhrSignup } from "./patternXhrSignup";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnXhrSignup = (urlParams?: UrlParamsXhrSignup) => void;
export const useRedirectXhrSignup = (): RedirectFnXhrSignup => {
  const redirect: RedirectFnXhrSignup = (urlParams) => {
    const to = generateUrl(patternXhrSignup, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originXhrSignup });
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
