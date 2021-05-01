/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlParamsMe, patternMe, originMe } from "./patternMe";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnMe = (urlParams?: UrlParamsMe) => void;
export const useRedirectMe = (): RedirectFnMe => {
  const redirect: RedirectFnMe = (urlParams) => {
    const to = generateUrl(patternMe, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originMe });
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
