/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsLogout, patternLogout, originLogout } from "./patternLogout";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnLogout = (urlParts?: UrlPartsLogout) => void;
const useRedirectLogout = (): RedirectFnLogout => {
  const redirect: RedirectFnLogout = (urlParts) => {
    const to = generateUrl(patternLogout, {}, urlParts?.urlQuery, urlParts?.origin ?? originLogout);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectLogout;
