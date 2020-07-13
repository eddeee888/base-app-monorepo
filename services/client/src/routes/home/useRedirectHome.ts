/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsHome, patternHome, originHome } from "./patternHome";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnHome = (urlParts?: UrlPartsHome) => void;
const useRedirectHome = (): RedirectFnHome => {
  const redirect: RedirectFnHome = (urlParts) => {
    const to = generateUrl(patternHome, {}, urlParts?.urlQuery, urlParts?.origin ?? originHome);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectHome;
