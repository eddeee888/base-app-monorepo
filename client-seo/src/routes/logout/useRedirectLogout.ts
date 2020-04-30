/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsLogout, patternLogout } from "./patternLogout";
import generateUrl from "route-codegen/generateUrl";
export type RedirectLogout = (urlParts: UrlPartsLogout) => void;
const useRedirectLogout = (): RedirectLogout => {
  const redirect: RedirectLogout = (urlParts) => {
    const to = generateUrl(patternLogout, {}, urlParts.urlQuery);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectLogout;
