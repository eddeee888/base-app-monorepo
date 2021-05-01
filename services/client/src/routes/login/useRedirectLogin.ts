/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlParamsLogin, patternLogin, originLogin } from "./patternLogin";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnLogin = (urlParams?: UrlParamsLogin) => void;
export const useRedirectLogin = (): RedirectFnLogin => {
  const redirect: RedirectFnLogin = (urlParams) => {
    const to = generateUrl(patternLogin, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originLogin });
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
