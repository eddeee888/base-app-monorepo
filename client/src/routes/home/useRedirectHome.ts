/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsHome, patternHome } from "./patternHome";
import generateUrl from "route-codegen/generateUrl";
export type RedirectHome = (urlParts: UrlPartsHome) => void;
const useRedirectHome = (): RedirectHome => {
  const redirect: RedirectHome = (urlParts) => {
    const to = generateUrl(patternHome, {}, urlParts.urlQuery);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectHome;
