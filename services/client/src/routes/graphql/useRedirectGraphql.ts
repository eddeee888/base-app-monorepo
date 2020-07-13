/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsGraphql, patternGraphql, originGraphql } from "./patternGraphql";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnGraphql = (urlParts?: UrlPartsGraphql) => void;
const useRedirectGraphql = (): RedirectFnGraphql => {
  const redirect: RedirectFnGraphql = (urlParts) => {
    const to = generateUrl(patternGraphql, {}, urlParts?.urlQuery, urlParts?.origin ?? originGraphql);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectGraphql;
