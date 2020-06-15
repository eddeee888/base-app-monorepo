/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsStatic500, patternStatic500, originStatic500 } from "./patternStatic500";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnStatic500 = (urlParts?: UrlPartsStatic500) => void;
const useRedirectStatic500 = (): RedirectFnStatic500 => {
  const redirect: RedirectFnStatic500 = (urlParts) => {
    const to = generateUrl(patternStatic500, {}, urlParts?.urlQuery, urlParts?.origin ?? originStatic500);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectStatic500;
