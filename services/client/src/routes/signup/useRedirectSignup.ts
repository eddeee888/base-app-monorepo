/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlParamsSignup, patternSignup, originSignup } from "./patternSignup";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnSignup = (urlParams?: UrlParamsSignup) => void;
export const useRedirectSignup = (): RedirectFnSignup => {
  const redirect: RedirectFnSignup = (urlParams) => {
    const to = generateUrl(patternSignup, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originSignup });
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
