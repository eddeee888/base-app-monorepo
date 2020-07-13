/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsStatic404, patternStatic404, originStatic404 } from "./patternStatic404";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnStatic404 = (urlParts?: UrlPartsStatic404) => void;
const useRedirectStatic404 = (): RedirectFnStatic404 => {
  const redirect: RedirectFnStatic404 = (urlParts) => {
    const to = generateUrl(patternStatic404, {}, urlParts?.urlQuery, urlParts?.origin ?? originStatic404);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectStatic404;
