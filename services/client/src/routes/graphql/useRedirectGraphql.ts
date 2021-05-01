/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlParamsGraphql, patternGraphql, originGraphql } from "./patternGraphql";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnGraphql = (urlParams?: UrlParamsGraphql) => void;
export const useRedirectGraphql = (): RedirectFnGraphql => {
  const redirect: RedirectFnGraphql = (urlParams) => {
    const to = generateUrl(patternGraphql, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originGraphql });
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
