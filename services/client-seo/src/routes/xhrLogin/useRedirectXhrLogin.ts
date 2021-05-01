/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlParamsXhrLogin, patternXhrLogin, originXhrLogin } from "./patternXhrLogin";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnXhrLogin = (urlParams?: UrlParamsXhrLogin) => void;
export const useRedirectXhrLogin = (): RedirectFnXhrLogin => {
  const redirect: RedirectFnXhrLogin = (urlParams) => {
    const to = generateUrl(patternXhrLogin, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originXhrLogin });
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
